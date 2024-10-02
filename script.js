let canClick ;
const animalsTab = ["cow", "pig", "duck", "chicken", "fishe"]
const timeTab = [16348, 5291, 9886, 419, 20]
const nmbrAniTab = {"cow":160, "pig":250, "duck":1000, "chicken":1000, "fishe":1000}
const nmbrAniKilledTab = {"cow":"308.64 million", "pig":"1.49 billion", "duck":"3.19 billion", "chicken":"75.21 billion", "fishe":"1.56 trillion"}
let tabVar = 0;
const scene = document.querySelector("a-scene")
function displayAniKilled(animal){
    let panelStick = document.createElement("a-cylinder")
    let panel = document.createElement("a-box")
    let panelText = document.createElement("a-text")
    panelStick.setAttribute("color","#A56F00")
    panelStick.setAttribute("scale","0.05 1.7 0.05")
    panelStick.setAttribute("position","1 1 -5")
    panelStick.setAttribute("class","animals")
    panelStick.setAttribute("dynamic-body", "shape: auto, restitution:0")
    panel.setAttribute("color","#A56F00")
    panel.setAttribute("height", "1")
    panel.setAttribute("width", "1.5")
    panel.setAttribute("depth", "0.1")
    panel.setAttribute("position","1 6 -5")
    panel.setAttribute("class","animals")
    panel.setAttribute("dynamic-body", "shape:auto,restitution:0")
    panelText.setAttribute("value",`Representing ${nmbrAniKilledTab[animal]} ${animal}s killed yearly`)
    panelText.setAttribute("position","1 1.65 -4.9")
    panelText.setAttribute("align","center")
    panelText.setAttribute("color", "black")
    panelText.setAttribute("width", "1.4")
    panelText.setAttribute("text","wrapCount:20")
    panelText.setAttribute("class","animals")
    scene.appendChild(panelText)
    scene.appendChild(panel)
    scene.appendChild(panelStick)
}
function displayTime(time, animal) {
    let totalMilliseconds = time;
    let totalSeconds = Math.floor(totalMilliseconds / 1000);
    let seconds = totalSeconds % 60;
    let milliseconds = totalMilliseconds % 1000;
    let formattedSeconds = seconds.toString().padStart(2, '0');
    let formattedMilliseconds = milliseconds.toString().padStart(3, '0');

    let formattedTime = `Here is the representation of the number of ${animal}s (${nmbrAniTab[animal]}) killed on earth for their meat each \n\n${formattedSeconds}.${formattedMilliseconds} s`;
    document.getElementById('panel-text').setAttribute("value",formattedTime);
}
function startTimer(maxTime, animal) {
    startTime = Date.now();
    function updateTimer() {
        elapsedTime = Date.now() - startTime;
        if (elapsedTime >= maxTime) {
            elapsedTime = maxTime; // S'assure que le temps affiché n'excède pas le temps maximum
            displayTime(elapsedTime, animal);
        } else {
            displayTime(elapsedTime);
            requestAnimationFrame(updateTimer); // Continue la mise à jour
        }
    }

    requestAnimationFrame(updateTimer);
}
function disposeModel(modelEntity) {
    modelEntity.object3D.traverse(function (node) {
        if (node.isMesh) {
            // Libérer la géométrie
            if (node.geometry) {
                node.geometry.dispose();
            }
            // Libérer les matériaux
            if (node.material) {
                if (Array.isArray(node.material)) {
                    node.material.forEach(material => material.dispose());
                } else {
                    node.material.dispose();
                }
            }
        }
    });
}
// Fonction pour supprimer toutes les entités ayant une certaine "classe"
function removeEntitiesByClass(className) {
    const entities = document.querySelectorAll(`[class="${className}"]`);
    entities.forEach(entity => {
        disposeModel(entity);
        entity.parentNode.removeChild(entity);
    });
}

function afficherAnimaux(animal){
    let espacement = 1
    if(animal=="pig"){
        espacement = 2
    }
    if(animal=="cow"){
        espacement = 3
    }
    removeEntitiesByClass("animals")
    const animalData = new THREE.GLTFLoader();
    for(let k=0; k<10; k++){
        for(let i=-5; i<5; i=i+espacement){
            for(let j=-2; j>-12; j=j-espacement){
                animalData.load(`assets/${animal}.glb`, function (gltf) {
                    let entity = document.createElement('a-entity');
                    const model = gltf.scene;
                    let randomColor = Math.floor(Math.random()*16777215).toString(16); //Code from Chris Coyier, https://css-tricks.com/snippets/javascript/random-hex-color/
                    model.traverse((child) => {
                        if (child.isMesh) {
                            child.material = new THREE.MeshStandardMaterial({
                                color: `#${randomColor}`
                            });
                        }
                    });
                    entity.setObject3D('mesh', model);
                    entity.setObject3D('mesh', gltf.scene);
                    entity.setAttribute('position', {x: i-2.5, y: 4 + k-espacement, z: j-4.5});
                    entity.setAttribute('id', `${animal}${i}${j}${k}`);
                    entity.setAttribute('dynamic-body', "shape: box, restitution:0");
                    entity.setAttribute('class', `animals`);
                    entity.setAttribute('scale', `${1-(Math.random()/4)} ${1-(Math.random()/4)} ${1-(Math.random()/4)}`)
                    entity.addEventListener('collide', ()=>{
                        let body = entity.body
                        body.velocity.set(0,0,0)
                        body.angularVelocity.set(0,0,0)
                        body.sleep();
                    })
                    scene.appendChild(entity);
                })
            }
        }
    }
}
document.querySelector('#refresh-button').addEventListener('click', function() {
    if (canClick==undefined){
        canClick = true;
    }
    if (canClick) {
        startTimer(timeTab[tabVar],animalsTab[tabVar]);
        let button = document.querySelector("#refresh-button")
        let buttonBorder = document.querySelector("#refresh-button-border")
        button.setAttribute("scale", "0.3 0.3 0.3")
        buttonBorder.setAttribute("scale", "0.31 0.31 0.31")
        canClick = false; // Désactive le click
        afficherAnimaux(animalsTab[tabVar])
        displayAniKilled(animalsTab[tabVar])
        document.querySelector("#statut").setAttribute("value", "Click !");
        setTimeout(function () {
            button.setAttribute("scale", "0.3 0.5 0.3") // Permet au bouton de "s'enfoncer"
            buttonBorder.setAttribute("scale", "0.31 0.51 0.31")
            canClick = true;
            document.querySelector("#statut").setAttribute("value", "Click on the button");
        }, Math.max(timeTab[tabVar],6700));
        tabVar++;
        if(tabVar > 4){
            tabVar=0;
        }
}});

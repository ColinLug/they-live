# They live
## Description
This VR scene shows the number of animals killed for their flesh worldwide in a given number of seconds. It is designed to challenge the immense number of lives taken by humankind from the animal world. The 5 3D models of the animals are displayed by clicking on the button in front of the user, and cycle with each press. For sources and figures, see below.
To explore this scene, you can download all the files on the repository. Then you need to open the "index.html" file in VS Code (or use a local server) and open via go live (live server extension).
![alt-text](https://github.com/ColinLug/horror-scene/blob/main/gif_horror_scene.gif)
(Note : some difficulties with the screen's streaming have added some lag to the gif, the experience should be more fluid)
## Ressources
### Assets
The 3D models of the land animals (chicken, pigs, cows and ducks) are on Public Domain : https://creazilla.com/media/3d-model/67711/low-poly-farm-animals

The 3D model of the fish is on Public Domain and modified on blender: https://creazilla.com/media/3d-model/5208/set-of-fish

### Sources
For the land animals the datas are retrieved from Our World in Data (https://ourworldindata.org/grapher/animals-slaughtered-for-meat) for the 2022 year. The time interval is then calculated by imagining a linear distribution of the number of animals killed. Here are the details of the calculation, where "x" corresponds to the number of individuals slaughtered each year and "y" the number of 3D models displayed on screen: y*(365*24*60*60)/x seconds.

For the wild fishes the datas are retrieved from Our World in Data (https://ourworldindata.org/grapher/wild-caught-fish) for the 2016 year and by taking the midpoint estimate. The time interval is calculated as above.

## Development contex
This project was developed as part of the “Visualisation de données” course taught by Isaac Pante (SLI, Lettres, UNIL).

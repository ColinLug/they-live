# They live
## Description
This VR scene shows the number of animals killed for their flesh worldwide in a given number of seconds. It is designed to challenge the immense number of lives taken by humankind from the animal world. The 5 3D models of the animals are displayed by clicking on the button in front of the user, and cycle with each press. For sources and figures, see below.
To explore this scene, you can download all the files on the repository. Then you need to open the "index.html" file in VS Code (or use a local server) and open via go live (live server extension).
![alt-text](https://github.com/ColinLug/horror-scene/blob/main/gif_horror_scene.gif)
(Note : some difficulties with the screen's streaming have added some lag to the gif, the experience should be more fluid. Also some changes have been made of the final project)
## About the Data
Data from the FAO for the number of land animals killed for their meat (in this case, cows, chickens, pigs and ducks) shows a net increase since 1961 at global level in 2022. However, the population has also evolved, and it would be unfair to compare these data without noting this. After taking into account population trends between 1961 and 2022, we can see an overall increase in the ratio of animals killed per inhabitant. The only exception is the number of cows killed for their meat, which has fallen in relation to population growth. The biggest changes are in chickens and ducks. On average, the world's population will consume around 3x as many chickens and 4x as many ducks in 2022 as in 1961. It's interesting to compare these figures with those for Switzerland. While Swiss people generally kill 2x less beef and very slightly fewer pigs per capita, more than 11x as many chickens have been killed for their meat since 1961. It should be remembered that this figure does not represent consumption, but rather animals killed on Swiss soil. On the contrary, global figures allow us to deduce the annual consumption of meat by humans on Earth. Here is a summary table with the figures used (formula for relative change: [(y-x)/x]*100 where x are 1961 figures and y are 2022 figures).
![alt-text](https://github.com/ColinLug/horror-scene/blob/main/data_table_they_live.png)
The data used in “they live” (whose name is a somewhat macabre reference to the film of the same name, in which the main protagonist dons glasses that enable him to see messages hidden in real-world images), comes from the FAO for terrestrial animals via the ourworldindata site, which already allows a form of visualization of this data. The FAO seems to me, to the uninitiated, to be a reliable source in terms of agriculture. Being an official United Nations body, it seems unlikely that their data is heavily fudged. That said, these data are supplied primarily by countries and ministries of agriculture. The figures could be artificially inflated by these countries to conceal potential famines. On the other hand, figures could be lowered in countries where certain animals are culturally protected or considered unfit for consumption, but which have nevertheless given in to capitalist demands. The FAO explains: “Estimates have been made for non-reporting countries as well as for countries reporting incomplete data. However, in certain countries, data for chickens, ducks and turkeys do not yet seem to represent the total number of these birds. Certain other countries give a single figure for all poultry; data for these countries are shown under “Chickens””(Methodology - Crops and Livestock, consulted on 21.09.2024). Thus, some data are estimates and may be more heavily biased. With regard to sources for wild fish, the raw data come from the FAO. However, for fish, only tonnages are reported, which further de-individualizes these beings. It is therefore only possible to estimate the number of individuals killed for their flesh. This calculation was carried out by the fishcount association, which campaigns for more ethical fish processing. Biases are therefore potentially present, influencing the figures upwards. However, the association presents several estimates: high, medium and low. For the purposes of this study, only the medium estimate has been used. Farmed fish have not been taken into account.
The aim behind the project is to give the individual a place behind the figures. While writing this line, I realized that the 1st version of the project (displaying uniform 3D models on screen) did not allow for this consideration. The color and size changes between the added individuals are designed with this in mind. The numbers, it seems to me, don't convey the enormous number of victims of the meat industry, and this project aims to raise awareness of the subject of intensive livestock farming. The VR scene seemed to me to be a good way of showing these figures in a different way and really considering what they might represent. This visualization therefore only serves to question and show an immensity. Large numbers are difficult to interpret in general terms (as is the case when talking about wealth).  I imagine, however, that it's difficult to grasp the unimaginable number of fish killed every year, such is the sheer volume. However, the visualization doesn't give you a precise idea of the data, the history of the measurements or their distribution around the globe.
## Ressources
### Assets
The 3D models of the land animals (chicken, pigs, cows and ducks) are on Public Domain : https://creazilla.com/media/3d-model/67711/low-poly-farm-animals

The 3D model of the fish is on Public Domain and modified on blender: https://creazilla.com/media/3d-model/5208/set-of-fish

### Sources
For the land animals the datas are retrieved from Our World in Data (Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data. “Number of cattle slaughtered for meat – FAO” [dataset]. Food and Agriculture Organization of the United Nations, “Production: Crops and livestock products” [original data], https://ourworldindata.org/grapher/animals-slaughtered-for-meat) for the 2022 year. The time interval is then calculated by imagining a linear distribution of the number of animals killed. Here are the details of the calculation, where "x" corresponds to the number of individuals slaughtered each year and "y" the number of 3D models displayed on screen: y*(365*24*60*60)/x seconds.

For the wild fishes the datas are retrieved from Our World in Data (Fishcount (2018) – processed by Our World in Data. “Midpoint estimate” [dataset]. Fishcount, “Number of individual wild fish killed for food” [original data], https://ourworldindata.org/grapher/wild-caught-fish) for the 2016 year and by taking the midpoint estimate. The time interval is calculated as above.

## Development context
This project was developed as part of the “Visualisation de données” course taught by Isaac Pante (SLI, Lettres, UNIL).

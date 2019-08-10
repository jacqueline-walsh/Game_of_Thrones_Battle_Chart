# Game of Thrones - Battles

Game of thrones has an unpresidented TV presence with wikipedia reporting that, "by the sixth season the average per-episode gross viewing figure had increased to over 25 million, with nearly 40 percent of viewers watching on HBO digital platforms".

The Game of Thrones dashboard has been designed to show information from the book series, during a period of year 298 to year 300. The book provides the reader with a storyline which charts the civil war for control of the Seven Kinddoms; In the north's most furthest region lies a threat of the Others, who are beyond the defence of the towering wall of ice; Daenerys Targaryen the Mother of Dragons fights battles across the Narrow Sea in an attempt to cross the sea and win back the throne which was lost after the death of her father, the mad king.

The battles.csv which contains Chris Albon's "The War of the Five Kings" Dataset. Its a great collection of all of the battles in the series. The five kings in question were

- Robert Baratheon's heir, Joffrey Baratheon,
- Robert Baratheon's two younger brothers,
  - Stannis Baratheon,
  - Renly Baratheon,
- the "King in the North" Robb Stark, the illegitimate son of Ned Stark, the hand to Robert Baratheon
- and the "King of the Iron Islands" Balon Greyjoy

## UX

The user experience has been centered around existing and potential fans wanting to analyse the battles fought during a 3 year period, the user can interact with various dynamic and interactive data charts to access and anaylise many situations:-

- 1 x Dropdown Selector divided to region.
- 2 x bar charts
- 4 x pie charts
- 1 x force layout chart

By hovering or clicking on a section on one of the charts will dynamically alter the data on all charts to give the user a cross reference of relating data.

Due to the size of the force layout chart, this give best user experience when viewed on a desktop.

There are 2 x reset buttons located on the site so that the user is never far away from being able to reset the charts to the original status.

### User Story

The user wants to analyse battles fought per region:

- User accesses the site via either mobile or desktop
- User clicks on the drop down selector under the heading region selector
- User select the region, the North which has 10 battles
- User observes that all other data charts change to reflect the region selected
- User can click on various reset buttons which will return all charts to their original state and the user can change the focus of the data to a different view
- User can analyse data shown OR!!!
- User moves to the force layout map at the bottom of the site (it is advisible to access this section on mobile due to size of map)
- User can hover over each link on the dynamic layout which provides a details tooltip of the battle fought between the two houses.
- Now the user experience is complete the user can leave the site till next time!

### Mockups

Mockups have been created with the aid of Balsamiq and wireframe tool. Two wireframes have been created for this project, the first showing a desktop model and the second showing mobile.

[Wireframe - Desktop](https://github.com/jacqueline-walsh/Game_of_Thrones_Battle_Chart/blob/master/supporting_files/wireframes/Dashboard-desktop.png)
[Wireframe - Mobile](https://github.com/jacqueline-walsh/Game_of_Thrones_Battle_Chart/blob/master/supporting_files/wireframes/Dashboard-mobile.png)

### Excel Spreadsheet

Excel spreadsheet has been created from the battle.csv dataset.

- [Excel Spreadsheet](https://github.com/jacqueline-walsh/Game_of_Thrones_Battle_Chart/tree/master/supporting_files)

## Features

All features available to the user are given below in order from top of screen to bottom:-

### Existing Features

- Region Selector - dropdown selector menu. the user can select a region where the battle takes place to see how many battles have been fought in that region.
- Battles Over the Years - bar chart. Shows numer of battles fought on the y axis and the year of the battle on the x axis. User hovers or click bar to see how many battles were fought in that year.
- Attacker Size - pie chart. Shows the size of the attackers battle force
- Defender Size - pie chart. Shows the other side of the above chart, giving the battle force size of the defending house.
- Attacker King - doughnut pie chart. Shows which king lead the attack and the size of his battle force.
- Defender King - doughnut pie chart. Shows the defending king and the size of his battle force.
- Types of Battle - bar chart. Many battles were fought but this bar chart categories the type of battle and how many in each category. Types of battles include:
  - ambush
  - pitched battle
  - razing
  - seige
  - unknown
- All battles by house - force layout chart. This chart gives the user a overview of all the battles between the houses with a detailed tooltip given the following details:
  - name of battle
  - Brief description
  - Battle King
  - Battle type
  - Major death
  - Major capture
  - Attacker size
  - Defender size
  - Region / Location
  - Attacking Commander
  - Defending Commander

The force layout was implemented as a open source project by [B Sullins](https://bl.ocks.org/bsullins/faf637290007a08703b11af8a22f1781) The map was adapted for the project. However a decision was taken to include the map layout in an iframe on the site and develop the map as a separate project. The reason for this decision was due to the site charts being created with D3 version 5 (the latest version), and the map in D3 version 3. Due to the project timescale and the work / skill involved a migration of the map was deemed as unlikely.

Additional features to be implemented in the future:

As a further development in the future the map could be migrated from D3 version 3 to D3 version 5.

### Features Left to Implement

- This project could be extended to include the tv series as addiitonal charts.
- The dataset provided has many categories of data and further development of the dataset could be investigated,

## Technologies Used

Many languages, frameworks and libraries have been used on this project:

- HTML5 - Semantic HTML has been implemented in the dashboard layout
- CSS3 - used for the styling of the dashboard to provide a more visually pleasing site. The header background was included in the css.
- Javascript - For dynamic interaction user experience this dashboard uses Javascript.
- Bootstrap - Bootstrap was implemented to assist with dashboard layout and responsive design [bootstrap](https://getbootstrap.com/)
- D3.js - Library used to implement charts and manipulate the dataset. [d3.js](https://d3js.org/)
- DC.js - Library used on top of the of the D3 library for the visualisation and analysis of the data. [dc.js](https://dc-js.github.io/dc.js/)
- Crossfilter - Libary used to link all graphs to synchronise data and interation. [crossfilter](https://square.github.io/crossfilter/)
- Cloud9 AWS (Amazon) - cloud hosing used to store images for the force layout images [aws](https://aws.amazon.com/)
- GitHub - repository and version control used to store all project files [github](https://github.com/jacqueline-walsh/Game_of_Thrones_Battle_Chart)

## Testing

At implementation of each section of development the site has been viewed for layout, correctness and usability both on desktop and by resizing for mobile using a chrome extension "for Mobile/Responsive Web Design Tester".

- links checked and all found to be working correctly
- buttons all checked and found to be working correctly
- each chart checked for linking of all graphs to synchronise data and interation.
- Force layout chart could prove to be difficult for the a user to navigate but for now has been left available for mobile.
- all images have been set for responsive and tested to be correct and all include alt tags for screen readability
- The site has also been tested using the W3C valiation tester W3C_Validation

## Issue List

| Issue |                                           Description                                            |                                                              Solution                                                              |
| ----- | :----------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
| 1     | Force layout Chart was open source code created using D3 v3. Dashboard utilises updated version5 | Separate project was built and modified where necessary with the D3 V3 library and incorporated into the dashboard with iframe tag |

## Deployment

For the project the site has been depoloyed using the hosting platform GitHub.

As all files have been stored on the github respository there has been no need to change any links or alter any configuration on the project. The site has been deployed from the github master branch. As this was a small solo project no branches have been used.

[github repository for dashboard](https://github.com/jacqueline-walsh/Game\_of\_Thrones\_Battle_Chart)
[github repository for force layout](https://github.com/jacqueline-walsh/game-of-thrones)

[github live Dashboard](https://jacqueline-walsh.github.io/Game\_of\_Thrones\_Battle\_Chart/)
[github live force layout](https://jacqueline-walsh.github.io/game-of-thrones/) This site has been integrated into the dashboard via an iframe tag

## To deploy the project to Github the following steps were taken:

1. created a new repository project in Github
2. VSCode text editor was used local to development the dashboard and force layout
3. Local files were committed using a bash terminal commands: `git status`; `git add .`; `git commit -m "add message"`
4. Pushed files to the master branch of the git repository using `git push`, which updated the repository
5. Dashboard was published to github pages from the `master` branch using `settings` tab in the main page of the repository, select `source` as `master branch`, then `save`
6. While in the settings page of the reporistory a new url link will have been created.
7. Click url link to view dashboard live in the browser.

## Credits

Credit must be given to the following:

- [Chris Albons - The War of the Five Kings - Dataset](https://github.com/chrisalbon/)
- [B Sullins - Force Layout showing every battle between major houses and groups](https://bl.ocks.org/bsullins/faf637290007a08703b11af8a22f1781)

### Content

- The text for the site was copied from [Kaggle dataset](https://www.kaggle.com/mylesoneill/game-of-thrones/)

### Media

- The photos used in this site were obtained from [google images](https://www.google.com/search?q=game+of+thrones+images&tbm=isch&source=univ&sa=X&ved=2ahUKEwj4ldXo4vXjAhXuShUIHRAABdQQsAR6BAgHEAE&biw=2499&bih=1217)

### Acknowledgements

- I received inspiration for this project from searching many datasets on [Kaggle.com](https://www.kaggle.com/). I made my choice for the Game of Thrones dataset due to my own love of the books and series.

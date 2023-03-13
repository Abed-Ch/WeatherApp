<img src="https://github.com/Abed-Ch/WeatherApp/blob/master/Screenshots/weather-app.png" />

# Weather App
Table of content:

 1. [App Walkthrough](#walkthrough)
 1.1. [Themes](#themes)
 1.2. [Location Selection](#locations)
 1.3. [Dashboard](#dashboard)
 3. [Technologies Used](#tech)
 4. [Additional Screenshots](#shots)
 
<hr/>
<p id="walkthrought" />

## Application Walkthrough

We start off the application on the index page, the index page consists of three major parts:

 1. The Navbar
 2. The Hero Section
 3. Weather Animation Card

The Navbar is as it is, contains a logo, application name, and on the right an icon that controls if the application is in light or dark mode, when in light mode the icon will be of a moon, otherwise a sun.

The Hero section contains a dynamic, brief title that contains a pun, changes based on the theme [(read more...)](#themes) , a brief description, and a search bar that lets the user search for a city to see its weather condition, or click on the pin icon and the browser will use the GPS if available to detect the location and display the weather accordingly.

Finally, the weather animation card houses a few animated svg's that changed based on the themes.
<p id="themes" />

### Themes

On my application i have 4 themes based on weather conditions that one of them loads randomly when the page loads or upon refreshing, each theme contains colors for both light and dark modes, and they are :

 1. Clear Weather
 2. Cloudy Weather
 3. Rainy Weather
 4. Snowy Weather

##### Clear Weather : 
If the clear weather is chosen, a title is displayed that describes a sunny weather, and the animation card will show an animated sun that will rise and sit at the top right corner of the screen, while 2 clouds with low opacity make their way across the card on repeat. if its dark mode, an animation will play where the sun will set and the moon rises and takes its place ( it doesn't suit having the sun at night). In addition, the clear weather theme is the only one that the title for it changes between light and dark mode (Sun title, Moon title).

<img src="https://github.com/Abed-Ch/WeatherApp/blob/master/Screenshots/ClearDay.jpeg" />

[Dark Mode Image](#Clear)
<hr/>


#### Cloudy Weather :
The cloudy weather theme will have a title describing a cloudy and gloomy weather, the weather card will have a few clouds of different colors, sizes and opacity traveling across the card from one side to the other on repeat.

<img src="https://github.com/Abed-Ch/WeatherApp/blob/master/Screenshots/CloudyDay.jpeg" />

[Dark Mode Image](#Cloudy)
<hr/>



#### Rainy Weather :
The rainy weather theme will have a title describing a rainy and wet weather, the weather card will have a dark clouds moving at the top of the card, while rain drops fall constantly and heavily. 

<img src="https://github.com/Abed-Ch/WeatherApp/blob/master/Screenshots/RainyDay.jpeg" />

[Dark Mode Image](#Rainy)
<hr/>


#### Snowy Weather :
The cloudy weather theme will have a title describing a Snowy and Cold weather, the weather card will have dark and white clouds moving at the top of the card, while snowballs fall slowly down in a loop.

<img src="https://github.com/Abed-Ch/WeatherApp/blob/master/Screenshots/SnowyDay.jpeg" />

[Dark Mode Image](#Snowy)
<hr/>
<p id="locations" />

### Locations Selection 

For the user to see the weather of a city of their choice, they can either click on the pin icon on the search bar, or search for a city name. When they enter a name and click search, the name will be sent to an [API](#h) that will then return possible city names that fits the searched name, their coordinates and the country of each city, that will then display the results on a modal.

<img src="https://github.com/Abed-Ch/WeatherApp/blob/master/Screenshots/ResultsMax.jpeg"/>

>If the search term has more than 5 possible results, a 'See More' button will be displayed as in the image above, otherwise it will disappear. 

<img src="https://github.com/Abed-Ch/WeatherApp/blob/master/Screenshots/ResultsLimited.jpeg"/>

<br />
<p id="dashboard" />

### Dashboard 

#### Current Weather 

<img src="https://github.com/Abed-Ch/WeatherApp/blob/master/Screenshots/DashHero.jpeg"/>

Once a location has been selected, the user will be navigated to the dashboard, where they can see all weather details for that location.
Starting of in the hero section we have 3 cards. The first card contains :

 1. Current Time (Updates Each Second)
 2. Minimum Temperature for That Day.
 3. Maximum Temperature for That Day.
 4. Windspeed and Wind direction (by rotating arrow)

The Second (Main) Card contains :

 1. Current Hour Temperature.
 2. Weather Condition ( Clear - Showers - Cloudy ...etc).
 3. An Animated Icon That Describes The Weather Condition.

The Third Card contains :

 1. The Date
 2. Minimum Apparent (Feels Like) Temperature.
 3. Maximum Apparent (Feels Like) Temperature.
 4. Probability of Rain (%).
 5. Time of Sun Rise.
 6. Time of Sun Set.

>Most of the data displayed is accompanied by a descriptive icon.

#### Hourly & Daily Weather
Under the hero section of the dashboard, 2 almost identical (styling wise) sections are available for Hourly weather and for Daily weather.

<img src="https://github.com/Abed-Ch/WeatherApp/blob/master/Screenshots/DashHourDay.jpeg" />

##### Hourly
The Hourly section contains 24 cards each representing the weather for an hour starting from the next hour. 
> e.g: if the time now is 3:00 PM, the first card will display the weather from 4:00 PM today till 3:00 PM tomorrow.

Each hourly card contains: 

 1. Time ( 6 PM )
 2. An Animated Icon Describing The Weather Condition 
 3. The Temperature 
 4. Probability of Rain
> Times Between 6PM and 6AM, will have their icons display a moon instead of sun ( Only For Icons Having Either Sun Or Moon )

##### Daily
The Daily Section contains 7 cards representing the weather each day of the week starting from the current day. The daily cards are similar to the hourly cards except instead of the temperature, it displays the minimum and maximum temperature, and the date instead of time.

<p id="tech" />

## Technologies Used 

The application was written in [Angular.](https://github.com/angular/angular)
With the help of [Bootstrap.](https://github.com/twbs/bootstrap)
Deployed in [Firebase.](https://firebase.google.com/)
[Weather Forecast API | Open-Meteo.com](https://open-meteo.com/en/docs)
[Locations API.](http://geodb-cities-api.wirefreethought.com/)

<p id="shots" />

## Additional Screenshots

![Clear Weather in Dark Mode](https://github.com/Abed-Ch/WeatherApp/blob/master/Screenshots/ClearNight.jpeg)<p id="Clear"/>

![Cloudy Weather in Dark Mode](https://github.com/Abed-Ch/WeatherApp/blob/master/Screenshots/CloudyNight.jpeg)
<p id="Cloudy"/>

![Rainy Weather in Dark Mode](https://github.com/Abed-Ch/WeatherApp/blob/master/Screenshots/RainNight.jpeg)
<p id="Rainy"/>

![Snowy Weather in Dark Mode](https://github.com/Abed-Ch/WeatherApp/blob/master/Screenshots/SnowyNight.jpeg)<p id="Snowy"/>

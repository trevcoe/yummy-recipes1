Yummy is a recipe app. The app works like this -

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

localhost:3000/ shows home page, containing some popular recipes/ vegetarian recipes. It also contains a navbar that shows up on every page, which allows the user to navigate to a certain type of cuisine, or run a search. The Yummy logo will take the user home.

The app runs with this api:

https://spoonacular.com/food-api

My api key is not included, and the app won't run without it.

You must sign up on the api website and get an api key. Then, create a .env file and put:

REACT_APP_API_KEY="insert api key here"

Spoonacular allows for about 100 request a day before you need to upgrade to a premium version.

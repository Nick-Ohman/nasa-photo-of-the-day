# Module Project: Component Side Effects- NASA APOD

This will be a two-module project. In it you will consume the NASA API to fetch the "Astronomy Photo Of The Day" or APOD. Once you fetch the data, you will build a few components that will render different pieces of data in your interface. After the second module (in the [DAY_TWO_README.md](DAY_TWO_README.md) file) you will re-style your app using one of the libraries you learn. 


## Description

In this project you will build out a application to show the nasa photo of the day.



# _Project - NASA APOD - Part I_

- This is a really fun project, and one to show your family and friends when you've finished.
- You will be starting from scratch and building the entire app
- You don't have any design specs to follow for this project, so you may want to start by building a basic wireframe first. Make it simple at the beginning, since you don't know what data you'll be getting back from NASA
- Once you get the data back, there may be more than you expected, or less than you expected, so your design plans may change. That's totally fine, and very normal in the real world. Just make the proper adjustments and move forward!

## Directions

**Step 1 - Planning**

- [ ] If you want, this is the time to make a simple design spec (look up ["simple wireframes"](https://www.google.com/search?q=simple+wireframes) to find resources & examples). **A pen & paper sketch (or outline) is often the fastest way to start your planning.**
- [ ] Once you have a design plan in mind, break down the designs into individual components.
- [ ] Plan which components will hold state, what data each needs from props (if any), and where you will be making your data fetch.
- [ ] Now it's time to jump into the code!

**Step 2 - File structure**

- [ ] Take a look at your planned components. Create the folders and files you need for each component.
- [ ] Leave most of them blank for now - you need to get your data from the API before you can really get these built.

**Step 3 - Fetching the Data**

- [ ] In `App.js` (or where ever you wanted to fetch the data) add state for the data you'll be getting from NASA.
- [ ] Add an effect hook to handle the API call side effect.
- [ ] Go to the [NASA APOD API docs](https://api.nasa.gov/#apod) and read through the docs to see how to make the API call.
- [ ] You don't _need_ an API key. However you may need one if you exceed the API request limits.
- [ ] Using the endpoint given, fetch the data using `axios`.
- [ ] In your `.then()` make sure to `console.log` the response so you can look at the shape of the data. 😃
- [ ] Before you add your data to state, make sure your effect hook has a dependency array (probably empty, since we don't want this effect synced up to any state/props), otherwise you will start an **infinite loop, and you will exceed the API rate limits of the DEMO_KEY and need to use a real API_KEY.**

DEMO KEY rate limits:

> Hourly Limit: 30 requests per IP address per hour

> Daily Limit: 50 requests per IP address per day

_Note: if the photo url is NOT a photo, you will need to learn how to display a video in a React app on your own, OR just fetch the APOD from a different date by adding this to the back of the API endpoint: `&date=2012-03-14`_

**Step 4 - Adding the Data to State**

- [ ] Once you have made the call correctly, and logged the data, add the data to the state property you built.

**Step 5 - Display the Data**
Now is the time to build out your other components. Compose your UI, and then pass the data to your children components via props so you can render it on the DOM.

## _MVP Requirements:_

- [ ] Use the effect hook to fetch the APOD data when the component mounts.
- [ ] Display the APOD data in different components that are composed together to build your UI.




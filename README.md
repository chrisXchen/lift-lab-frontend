# Lift Lab

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Overview

Logging your workouts is easy, but visualizing your progress is demoralizing. It's not linear, some days you feel stronger than others, and some you feel weaker. So where does that leave us? With blind consistency being your only motivator, that is... until Lift Lab arrives.

Lift Lab is a fitness tracker app that helps users track their workout progress, set goals, and achieve results. The app will allow users to create an account, log in, and record their workouts. They can view their progress, set goals, and track their progress towards those goals.


## Data Model

The application will store Users, Workouts, and Goals

* users can have multiple workouts (via references)
* each workout can have multiple goals (by embedding)

An Example User:

```javascript
{
  username: "liftlover",
  hash: // a password hash,
  workouts: // an array of references to Workout documents
}
```

An Example Workout with Embedded Goals:

```javascript
{
  user: // a reference to a User object
  name: "Chest Day",
  goals: [
    { name: "Bench press", sets: "4", reps: "10", weight: "135", completed: true},
    { name: "Incline press", sets: "3", reps: "12", weight: "115", completed: false},
  ],
  createdAt: // timestamp
}
```


## [Link to Commented First Draft Schema](db.mjs)


## Wireframes

/lift/create - page for creating a new workout

![list create](documentation/lift-create.png)

/lift - page for showing all workouts

![list](documentation/lift.png)

/lift/slug - page for showing specific workout

![list](documentation/lift-slug.png)


## [Site map](documentation/site-map.png)


## User Stories or Use Cases

1. As a non-registered user, I can register a new account with the site
2. As a user, I can log in to the site
3. As a user, I can create a new workout
4. As a user, I can view all of the workouts I've created in a single list
5. As a user, I can add goals to an existing workout
6. As a user, I can mark goals as completed in an existing workout
7. As a user, I can view my progress towards my goals


## Research Topics

* (1 point) Fitness Calculator API - An external API from Rapid API to fetch fitness related data
* (1 point) Muscle Group Image Generator API - Another external API from Rapid API to fetch muscle group related images
* (3 points) Unit Testing with Mocha - JavaScript testing framework to write unit tests for the application
* (3 points) Client Side Form Validation - Using a JavaScript library to perform client side form validation on user inputs.

* MAYBE - React


## [Link to Initial Main Project File](app.mjs)


## Annotations / References Used

1. [passport.js authentication docs](http://passportjs.org/docs)
2. [tutorial on react.js](https://react.dev/learn/tutorial-tic-tac-toe)
3. [mocha docs](https://mochajs.org/api/mocha.js.html)
4. [rapid api - external apis](https://rapidapi.com/search/fitness)

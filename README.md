This project was bootstrapped with [npx create-react-app my-app --template typescript].
The responsive layout is handled using bootstrap: [https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css]
To render the big picture of an album in the modal, these external javascripts are included:
  "https://code.jquery.com/jquery-3.4.1.slim.min.js",
  "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
  "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"

## languages: ES6 / typescript on React.js

## Available Scripts

In the project directory, run the following command to install all dependencies specified in the package.json:

### `npm install`

After `npm install` is finished successfully, run the following command to start the local server:

### `npm run start`

Open [http://localhost:3000] to view it in the browser. recommended browser: Chrome

### unit tests

### !!! VERY IMPORTANT !!!

Beaware that `npm run start` would set "jsx" to "preserve" in "tsconfig.json".
After `npm run start`, please change {"jsx": "preserve"} to {"jsx": "react"} in "tsconfig.json", otherwise `jest` command will not run properly!

One test suite is added to test "Users" component:
src/__tests__/Users.test.tsx

### execute the command `jest` to run the unit test
### if `jest` command is not found, try `./node_modules/.bin/jest`

This application uses the following additional features:

1. React and redux hooks - use state and dispatch in functional components without using redux connect HOC function to connect components to the store
2. Redux-persist - manage store state in a persistent way, even if the use refrehes the screen or closes and re-opens the browser, the store state is still in the components
    e.g. whatever the user selects are all retained in the state persistently.
3. reselect - optimize state selector functions
4. redux-saga - handles asynchronous API requests

Author: Yong Zhao, laoyezhao@yahoo.ca, 4168283689
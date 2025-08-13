// PROJECT STRUCTURE
/*
Project Structure

(folderName)
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js


node_modules           | Don't access this—it's full of installed packages managed by npm.
package.json           | Where your project's dependencies live + scripts (commands to run, build, test...). Edit if you add dependencies, but be careful!
package-lock.json      | Handled automatically by npm for dependency management. No need to touch or edit.
README.md              | Just notes and info about your project. You can edit to describe your app for others.
.gitignore             | Lists files and folders to exclude from git (like node_modules, build files).

public/                | Static assets (stuff that doesn't get processed by React, like images and the main index.html).
│   favicon.ico        | Little icon that appears in the browser tab.
│   index.html         | The root HTML file of the app—React injects stuff into here. You rarely touch this!
│   manifest.json      | Info about your app for browsers and devices.
│   robots.txt         | Tells search engines what can be indexed.

src/                   | Where all your React source code and components live—edit these files often!
│   App.js             | Main React App component. The heart of your app! Edit this to start building stuff.
│   App.css            | Styles for your App component.
│   index.js           | Entry point—loads your App component and renders everything.
│   index.css          | Global styles for your app.
│   logo.svg           | React logo image. Can delete, replace, or use.
│   reportWebVitals.js | Used for measuring app performance. Not always needed.
│   setupTests.js      | Used for configuring and running tests.
│   App.test.js        | Example test file for starter code.

   
// base file in this is index.html
// in src we writes react code .jsx 
// index.js is the connection with react 
// app.js ----------------------------



*/

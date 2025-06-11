# Ana's Cat API

## Project Description: 
React app for Web Development II course. 
App uses API endpoints for 
- Get Breeds: https://api.thecatapi.com/v1/breeds
- Get Images by Breed:
https://api.thecatapi.com/v1/images/search?breed_ids=BREED_ID&limit=6

App allows selecting a breed and viewing individual images in a separate panel. 

## Tools used: 

- GitHub ((https://github.com/Oliveena/ReactCourse/tree/main/exam_catAPI/cat-api-app))
- React and its official documentation
- Bootstrap (sorry Dr. Reza, I prefer it to Tailwind)
- Axios
- Coolors.co for color palette
- ChatGPT for Bootstrap .css templates and some debugging
- Project Tree VSC plugin for project structure generation

## Project Structure

```
exam_catAPI
└─ cat-api-app
   ├─ documents
   │  ├─ projectScreenshots
   │  │  ├─ Screenshot 2025-06-11 113735.png
   │  │  ├─ Screenshot 2025-06-11 113846.png
   │  │  └─ Screenshot 2025-06-11 113917.png
   │  └─ test-react-2025-06-10.pdf
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ favicon.ico
   │  ├─ index.html
   │  ├─ logo192.png
   │  ├─ logo512.png
   │  ├─ manifest.json
   │  └─ robots.txt
   ├─ README.md
   └─ src
      ├─ App.css
      ├─ App.js
      ├─ App.test.js
      ├─ components
      │  ├─ BreedDropdown.js
      │  └─ CatImages.js
      ├─ contexts
      │  ├─ BreedContext.js
      │  └─ CatImageContext.js
      ├─ index.css
      └─ index.js

```
## Demo
(see 
    exam_catAPI
    └─ cat-api-app
    ├─ documents
    │  ├─ projectScreenshots
)

## Future improvements 
 - let user build collections
 - add descriptions
 - add like/dislike button

=================================== 


# Getting Started with Create React App

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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

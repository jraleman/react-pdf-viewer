# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Props

### `timeout`

unrender the component once a certain threshold is reached of time
this can be useful for trials (preview app)

### `avoidCopy`

how to z-index an iframe to be under a div
make the div be on tap, but transparent
avoid right click
if element doesn't exist in the page, make the iframe to go transparent, or just unrender it
see if this works:
https://stackoverflow.com/questions/41418413/how-to-overlay-an-iframe-and-allow-click-through 
then set better approaches as version releases

### `transpareny`

use the div overlay on top of the iframe, but make it able to have text highlighter or something… maybe an onHover to unrender the div, and let the user click on the iframe directly… or maybe just apply the style change on the iframe
value changes from 0-100% 

### ...props (from lib-pdf)
copy from lib-pdf, maybe have the props to be spreadable, and make sure of what version of lib-pdf is being used

## Resources

- https://www.pdfdrive.com/living-in-the-light-a-guide-to-personal-transformation-d10172273.html
- https://mozilla.github.io/pdf.js/
- https://www.pdftron.com/blog/webviewer/how-to-integrate-a-pdf-viewer-in-html5-apps
- https://www.pdftron.com/blog/webviewer/pdfnetjs-html5-pdf-viewer-and-editor/
- https://www.w3docs.com/snippets/javascript/how-to-disable-text-selection-copy-cut-paste-and-right-click-on-a-web-page.html
- https://npm.io/package/@grapecity/gcpdfviewer
- https://github.com/wojtekmaj/react-pdf
- https://npm.io/package/@pleasedproperty/preact-pdf
- https://stackoverflow.com/questions/583753/using-css-to-affect-div-style-inside-iframe

loading-icon
https://codepen.io/aaroniker/pen/zYOewEP

Separators
https://codepen.io/joshuar/pen/MwdYLP

Frame
https://codepen.io/z-/pen/ZEzMpdj
# preact-pdf-viewer

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build npm ready bundles to be consumed by other Preact web apps
npm run build:widget

# build npm ready bundles to be used as a component library
npm run build:lib

# lint the project with eslint to find code style issues
npm run lint

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/preactjs/preact-cli/blob/master/README.md).

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
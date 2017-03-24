const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

module.exports = function() {
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
}

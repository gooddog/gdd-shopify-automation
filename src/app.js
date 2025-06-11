// Require CSS file
import './scss/app.scss'
// Require JS files

// vendor files
import 'bootstrap'

// initialize sections
// import './sections/header';

//custom
// import all components and save in components object
var components = {};
importAll(require.context("./js/pages/", true, /\.js$/), components);

$(function() {
  // Initialized global functions
  const app = new components["scripts"]();
  app.init();
  // const newsletter = new components["newsletter"]('footerNewsletterForm');

  // Initialized scoped functions
  const pageClass = $("body").data("scope");
  if (components[pageClass]) {
    new components[pageClass]().init();
  }
});

// utility function to import all files in certain directory
function importAll(r, store) {
  r.keys().forEach(key => {
    var keyString = Object.keys(r(key))[0];
    store[keyString] = r(key)[keyString];
  });
}

/**
 * preserveNavigationState
 * @description as the REST interface will have no way to elegantly preserve state for this
 * challenge we will simply preload the navigation class make all the rest interfaces reference the
 * class directly. This is not at all a good idea in a production environment as you have a
 * database managing continuous states.
 * @type {Navigation}
 */
const NavigationClass = require('../logic/nagivation');

const initialize = () => new NavigationClass();
module.exports = initialize();

/**
 * fetchAll.js
 * @description Simply fetches all the navigation points in the current Navigation class structure.
 * This by default will populate with child components.
 * @type {Navigation}
 */

const Navigation = require('../preserveNavigationState');

const fetchAll = (req, res) => {
  res.send(Navigation.fetchAllParents());
};

module.exports = fetchAll;

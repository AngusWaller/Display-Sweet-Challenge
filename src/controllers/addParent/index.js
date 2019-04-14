/**
 * addParent.js
 * Rest endpoint for adding a top level navigation point into the navigation structure.
 * @type {Navigation}
 */

const Navigation = require('../preserveNavigationState');

const addParent = (req, res) => {
  const { parentID, type } = req.body;

  Navigation.addNavigationParent(parentID, type);
  res.send({ added: parentID });
};

module.exports = addParent;

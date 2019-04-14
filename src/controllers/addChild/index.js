/**
 * addChild
 * @description Will add a child to a navigation parent, requires a child ID & a parent ID in the
 * url. May also pass the template & type optional fields in the body
 * @type {Navigation}
 */

const Navigation = require('../preserveNavigationState');

const addChild = (req, res) => {
  const {
    childID: id, parentID, template, type,
  } = req.body;

  Navigation.addNavigationChild({
    id,
    template,
    type,
    parentID,
  });
  res.send({ added: parentID });
};

module.exports = addChild;

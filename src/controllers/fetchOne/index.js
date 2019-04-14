/**
 * fetchOne
 * @description will fetch one navigation parent node from the
 */

const Navigation = require('../preserveNavigationState');

const fetch = (req, res) => {
  const { parentID } = req.params;
  const parent = Navigation.fetchParent(parentID);
  res.send(parent);
};

module.exports = fetch;

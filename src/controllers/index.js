/**
 * controllers index.js
 * @description Simple import/export management for controllers.
 * @type {fetch}
 */

const fetchAll = require('./fetchAll');
const fetchOne = require('./fetchOne');
const addParent = require('./addParent');
const addChild = require('./addChild');

module.exports = {
  fetchAll,
  fetchOne,
  addParent,
  addChild,
};

/**
 * navigation
 * @description All logic for calculation and management of the navigation data is here. This works
 * by first creating a blank structure, then all subsequent navigation calls populate this
 * structure finally when it is time to fetch, it will populate all navpoint children with their
 * respective components.
 */

const _ = require('lodash');
const componentsJSON = require('../stores/components');

class Navigation {
  constructor() {
    this.structure = {};
    this.mostRecentParent = null;
  }

  /**
   * addNavigationParent
   * Adds a new navigation element top the top layer of the navigation structure. This will
   * auto-increment the index by the index count & define the mostRecentParent to be added, for
   * quickhand coding subsequent operations.
   * @param parentID { string } The ID of the parent you wish to add to the nav structure
   * @param type { string } defaults to 'string', define the data type for the element.
   * @return {Navigation} returns this for short hand later on.
   */
  addNavigationParent(parentID, type = 'string') {
    this.structure[parentID] = {
      children: {},
      index: Object.keys(this.structure).length,
      type,
    };

    this.mostRecentParent = parentID;

    // We will return the ability to add children to this parent.
    return this;
  }

  /**
   * fetchParent
   * @description fetchOne the parent at the given id
   * @param parentID { string } defaults to mostRecentParent added to structure.
   * @param populateComponents { boolean } Add the components from the child id's
   * @return {{}} An object containing the parent element with child components embedded.
   */

  fetchParent(parentID = this.mostRecentParent, populateComponents = true) {
    const parentObject = this.structure[parentID];

    if (populateComponents) {
      _.forEach(parentObject.children, (child, childID) => {
        Object.assign(child, { component: componentsJSON.components[childID] });
      });
    }
    return { [parentID]: parentObject };
  }

  /**
   * fetchAllParents
   * @description Simply loop through all the navpoints in the structure and fetch their data
   * using fetchParent.
   */
  fetchAllParents() {
    const resultPopulatedParents = {};
    Object.keys(this.structure).forEach((parentID) => {
      Object.assign(resultPopulatedParents, this.fetchParent(parentID));
    });
    return resultPopulatedParents;
  }

  /**
   * addNavigationChild
   * @description allows us to extend the structure of the parent by adding data to it's children
   * @param id {string} the child ID, which is also the components ID which we want to embed in this
   * child
   * @param template { string } defaults to 'templateString' allows us to determine top level type
   * of this child element
   * @param type { string } defaults to 'typeString' allows us to determine top level type
   * of this child element
   * @param parentID { string } defaults to mostRecentParent added to structure. Allows us to define
   * what parent we will add onto at any time.
   */
  addNavigationChild({
    id,
    template = 'templateString',
    type = 'typeString',
    parentID = this.mostRecentParent,
  }) {
    const parentObject = this.structure[parentID];

    if (!parentObject) {
      throw Error('Navigation create child was called without an existing navigation parent');
    }

    const childCount = Object.keys(parentObject.children).length;

    this.structure[parentID].children[id] = {
      index: childCount,
      parentId: parentID,
      template,
      type,
    };
  }

  /**
   * fetchJSON
   * @description Allows us to write the raw navigation json that has been seeded by this class.
   * @return {string} a json string containing the resultant structure data
   */
  fetchJSON() {
    return JSON.stringify({ navigation: this.structure });
  }
}

module.exports = Navigation;

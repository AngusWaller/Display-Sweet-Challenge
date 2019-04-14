/**
 * app.test.js
 * This is a testbed of the base logic for the project. This will test all the seed logic
 * and the logic of creating and fetching one navigation node.
 */

const NavigationClass = require('../src/logic/nagivation');

const navigationResults = require('./results/navigation-json.test');
const fetchResults = require('./results/fetch.test');

describe('App Core Test', () => {
  describe('Navigation', () => {
    test('Seed Navigation', () => {
      const nav = new NavigationClass();
      nav.addNavigationParent('2199fb7e-b249-4a22-acab-221a677cee9b');
      nav.addNavigationChild({ id: 'cff20369-bb02-4720-b1e9-8870f54d0073' });
      nav.addNavigationChild({ id: 'c4e14101-9713-463a-b028-deb23c9f38bf' });

      nav.addNavigationParent('6c673c1f-8345-4d5c-9652-cca03d56a3ac');
      nav.addNavigationChild({ id: '85c703dd-4887-4e9d-a1b7-14022958860b' });

      const toObj = nav.fetchJSON();
      expect(toObj).toEqual(JSON.stringify(navigationResults));
    });
  });

  describe('Fetch', () => {
    test('Fetch 2199fb7e-b249-4a22-acab-221a677cee9b & Children', () => {
      const nav = new NavigationClass();
      nav.addNavigationParent('2199fb7e-b249-4a22-acab-221a677cee9b');
      nav.addNavigationChild({ id: 'cff20369-bb02-4720-b1e9-8870f54d0073' });
      nav.addNavigationChild({ id: 'c4e14101-9713-463a-b028-deb23c9f38bf' });

      // While I don't need to define the parent as it defaults to mostRecentParent,
      // it's worth testing.
      const fetch = nav.fetchParent('2199fb7e-b249-4a22-acab-221a677cee9b');

      expect(fetch).toEqual(fetchResults);
    });
  });
});

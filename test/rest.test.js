/**
 * rest.test.js
 * @description This will run all the rest environment tests for the application. This works by
 * first declaring to the express application that we will be debugging and do not want any clashes
 * listening to the port. All REST calls are then declared as to standardize the transaction.
 * Once a local testing version of express is active we can run all the end points.
 *
 * This is a bit of a messy script...
 */

const request = require('request-promise');
const restResult = require('./results/rest.test');

// We will need to set the env variable context for debug to be true, so that express doesn't
// start listening for the app outside of the test
process.env.DEBUG = true;
const expressServer = require('../index');

const port = process.env.PORT || 3000;
const baseURL = `http://localhost:${port}`;

// Define the REST calls that will be made to the interface.
const makeRequest = ({ type, url, body }) => request[type]({
  url: baseURL + url,
  json: true,
  body,
});

const addParent = body => makeRequest({ type: 'post', url: '/navigation/', body });
const addChild = body => makeRequest({ type: 'post', url: '/navigation/addChild/', body });
const fetchOne = parentID => makeRequest({ type: 'get', url: `/navigation/${parentID}` });
const fetchAll = () => makeRequest({ type: 'get', url: '/navigation/' });


describe('Test Rest API', () => {
  // Load express

  test('Seed both navpoints through REST', (done) => {
    expressServer.listen(port, async () => {
      console.log('Testing express server loaded');

      let parentID = '2199fb7e-b249-4a22-acab-221a677cee9b';
      await addParent({ parentID });
      await addChild({ parentID, childID: 'cff20369-bb02-4720-b1e9-8870f54d0073' });
      await addChild({ parentID, childID: 'c4e14101-9713-463a-b028-deb23c9f38bf' });

      parentID = '6c673c1f-8345-4d5c-9652-cca03d56a3ac';
      await addParent({ parentID });
      await addChild({ parentID, childID: '85c703dd-4887-4e9d-a1b7-14022958860b' });

      expect(await fetchAll()).toEqual(restResult);

      done();
    });
  });
});

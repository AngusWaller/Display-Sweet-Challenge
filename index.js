/**
 * index.js
 * This is the root .js file, and contains all the route logic for the REST interface using
 * express. If you are interested in the logic that makes this run check ./src/logic
 *
 * All routes are managed by controllers in ./src/controllers
 * All tests are located in ./tests/
 */


const express = require('express');
const bodyParser = require('body-parser');

const {
  fetchAll, fetchOne, addParent, addChild,
} = require('./src/controllers');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.get('/navigation/', fetchAll);
app.get('/navigation/:parentID', fetchOne);
app.post('/navigation/', addParent);
app.post('/navigation/addChild/', addChild);

if (!process.env.DEBUG) {
  app.listen(port, () => console.log(`Display Sweet app listening on port ${port}!`));
}


module.exports = app;

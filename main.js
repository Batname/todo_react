"use strict";

require('babel/register');
let app = require('./server');

app.init().catch(function (err) {
  console.error(err.stack);
  process.exit(1);
});
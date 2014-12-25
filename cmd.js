#!/usr/bin/env node

var wzrd = require('wzrd');
var thrustWindow = require('thrust-window');
var width = 1024;
var height = 600;
var port = 9966;
var entry = process.argv[2];
var wzrd_opts = {entries: [ { from: entry, to: entry } ] }

if (process.argv[3])
  width = parseInt(process.argv[3]);

if (process.argv[4])
  height = parseInt(process.argv[4]);

wzrd.http(wzrd_opts).listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    thrustWindow("http://localhost:9966", width, height);
  }
})

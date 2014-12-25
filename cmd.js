#!/usr/bin/env node

var wzrd = require('wzrd');
var thrust = require('node-thrust');

var width = 1024;
var height = 600;
var port = 9966;
var entry = process.argv[2];
if (process.argv[3])
  width = parseInt(process.argv[3]);
if (process.argv[4])
  height = parseInt(process.argv[4]);

var opts = {}
opts.entries = [ {from: entry, to: entry} ];
var server = wzrd.http(opts);

server.listen(port, function(err) {
  if (err) {
    console.error('error starting server', err)
    process.exit(1)
  }

  thrust(function(err, api) {
    if (err) {
      console.error('error starting thrust', err)
      process.exit(1)
    }

    var local_url = 'http://localhost:' + port;
    var win = api.window({
      root_url: local_url,
      size: {
        width: width,
        height: height
      }
    })
    win.show();
    win.focus();
  });
})

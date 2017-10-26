#!/usr/bin/env node
var path = require('path');
var args = require('yargs').argv;
var browserSync = require('browser-sync');
var fs = require('fs');
var gaze = require('gaze');

args.port = args.port || args.p || 5119;
args.project = args.project || args.proj || args.t || './';
args.project = path.resolve(process.cwd(), args.project);
watchfiles = path.resolve( args.project, './*/*.*');
watchfile = path.resolve( args.project, './html/index.html');

browserSync.init({
    server : {
        baseDir: args.project
    },
    port: args.port
})

fs.watch(args.project, {
    persistent: false,
    recursive: true
}, function(event, filename) {
    browserSync.reload();
});


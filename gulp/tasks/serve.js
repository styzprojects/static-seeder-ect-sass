'use strict';

// common dependencies
var
    gulp = require('gulp-help')(require('gulp')),
    config = require('../config'),
    arg = require('yargs').argv,
    env = arg.env;

// serve task dependencies
var browserSync = require('browser-sync');

gulp.task('serve', 'Builds and serves the application bundle', ['build'],
    function () {

        browserSync(config.browserSync);

        gulp.watch(config.serve.ect, ['ect']);
        gulp.watch(config.serve.styles, ['sass']);
        gulp.watch(config.serve.scripts, ['scripts']);
        gulp.watch(config.serve.images, ['images']);
        gulp.watch(config.serve.data, ['copy']);
    });

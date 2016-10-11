'use strict';

// common dependencies
var
    gulp = require('gulp-help')(require('gulp')),
    g = require('gulp-load-plugins')(),
    config = require('../config'),
    arg = require('yargs').argv,
    env = arg.env;

if (env === '' || env === undefined) env = 'dev';

gulp.task('test', 'Run ECT templating',
    function () {
        return gulp
            .src(config.common.ect)
            .pipe(g.debug())
            .pipe(g.plumber({
                errorHandler: g.notify.onError("Error: <%= error.message %>")
            }))
            .pipe(g.ect())
            .pipe(g.if((env === 'prod'), g.htmlmin()))
            .pipe(gulp.dest(config.dest.html));
    });

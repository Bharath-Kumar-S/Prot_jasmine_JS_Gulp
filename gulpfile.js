const gulp = require('gulp');
const protractor = require("gulp-protractor").protractor;
const webdriver_update = require('gulp-protractor').webdriver_update;
const webdriver_standalone = require('gulp-protractor').webdriver_standalone;
const util = require('gulp-util');
// const runSequence = require('run-sequence');

gulp.task('webdriver_update',webdriver_update);
gulp.task('webdriver_standalone',webdriver_standalone);
gulp.task('protractor', ['webdriver_update'],function () {
    log('end to end test started ...');
    gulp.src('./specs/**/*.js')
        .pipe(protractor({
            configFile: 'protractor.conf.js'
        }))
});

function log(msg) {
    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                util.log(util.colors.blue(msg[item]));
            }
        }
    } else {
        util.log(util.colors.blue(msg));
    }
}
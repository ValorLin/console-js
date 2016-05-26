var gulp = require('gulp'),
    umd = require('gulp-umd'),
    uglify = require('gulp-uglify'),
    header = require('gulp-header'),
    rename = require('gulp-rename');

var banner = `/**
* console-js MIT license
* https://github.com/weilao/console-js
* @author Weilao
**/
`;

gulp.task('default', ['build']);

gulp.task('build', function () {
    gulp.src('src/console.js')
        .pipe(umd({
            exports: function () {
                return 'console';
            },
            namespace: function () {
                return 'console';
            }
        }))
        .pipe(header(banner))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename('console.min.js'))
        .pipe(gulp.dest('dist'));
});
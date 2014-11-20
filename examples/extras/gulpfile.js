var server = require('./server.js');

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var autoprefixer = require('gulp-autoprefixer');

var css = ["./*.css", "./css/*.css"];
var js = ["./*.js", "./js/*.js"];

function prefix() {
    return gulp.src(css)
        .pipe(autoprefixer({}))
        .pipe(gulp.dest('dist'));
}

gulp.task('prefix', prefix);

function lint() {
    return gulp.src(js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
}

gulp.task('lint', lint);

gulp.task('watch', function() {
    gulp.watch(css, ['prefix']);
    gulp.watch(js, ['lint']);
    gulp.start("prefix");
    server.startServer();
});

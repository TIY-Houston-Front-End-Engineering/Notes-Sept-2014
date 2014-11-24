var server = require('./server.js');

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

var css = ["./*.css", "./css/*.css"];
var scss = ["./*.scss", "./scss/*.scss"];
var js = ["./*.js", "./js/*.js"];

function prefix() {
    return gulp.src(css)
        .pipe(autoprefixer({}))
        .pipe(gulp.dest('./dist'));
}

gulp.task('prefix', prefix);

function lint() {
    return gulp.src(js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
}

gulp.task('lint', lint);

function sassify() {
    gulp.src(scss)
        .pipe(sass())
        .pipe(autoprefixer({}))
        .pipe(gulp.dest('./dist'));
}

gulp.task('sass', sassify);

gulp.task('watch', function() {
    gulp.watch(css, ['prefix']);
    gulp.watch(js, ['lint']);
    gulp.watch(scss, ['sass']);

    gulp.start("prefix");
    gulp.start("sass");
    server.startServer();
});

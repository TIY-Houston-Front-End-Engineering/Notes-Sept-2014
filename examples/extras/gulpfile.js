var gulp = require('gulp');
var jshint = require('gulp-jshint');
var autoprefixer = require('gulp-autoprefixer');

var css = ["./*.css", "./css/*.css"];
var js = ["./*.js", "./js/*.js"];

gulp.task('prefix', function() {
    return gulp.src(css)
        .pipe(autoprefixer({}))
        .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
    return gulp.src(js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    gulp.watch(css, ['prefix']);
    gulp.watch(js, ['lint']);
});
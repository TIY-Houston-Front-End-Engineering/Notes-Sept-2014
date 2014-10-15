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
    startServer();
});

/**
 * Module dependencies.
 */

function startServer() {
    var express = require('express'),
        http = require('http'),
        path = require('path'),
        app = express();

    // all environments
    app.set('port', process.argv[3] || process.env.PORT || 3000);

    app.use(express.static(path.join(__dirname, '')));

    http.createServer(app).listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'));
    });
}

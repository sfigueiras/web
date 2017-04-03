// Gulp
var gulp = require('gulp');

// Sass/CSS stuff
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

// JavaScript
var uglify = require('gulp-uglify');

// Images
var svgmin = require('gulp-svgmin');
var imagemin = require('gulp-imagemin');

// Stats and Things
var size = require('gulp-size');

//

var BUILD_DIR = './public';

// compile all your Sass
gulp.task('sass', function (){
    gulp.src(['./sass/*.scss', '!./sass/_variables.scss'])
        .pipe(sass({
            includePaths: ['./sass'],
            outputStyle: 'expanded'
        }))
        .pipe(prefix(
            "last 1 version", "> 1%", "ie 8", "ie 7"
        ))
        .pipe(gulp.dest(BUILD_DIR + '/css'));
});

// Uglify JS
gulp.task('js', function(){
    gulp.src('./js/*.js')
        .pipe(gulp.dest(BUILD_DIR + '/js'));  
});

gulp.task('html', function() {
    gulp.src([ '*.html'])
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('images', function() {
    gulp.src([ './images/**'])
        .pipe(gulp.dest(BUILD_DIR + '/images'));
});

gulp.task('manifest', function() {
    gulp.src([ './manifest/**'])
        .pipe(gulp.dest(BUILD_DIR + '/manifest'));
});

gulp.task('vendor', function() {
    gulp.src([ './vendor/**'])
        .pipe(gulp.dest(BUILD_DIR + '/vendor'));
});

gulp.task('default', function(){
    gulp.run('html');
    gulp.run('manifest');
    gulp.run('images');
    gulp.run("js");
    gulp.run("sass");
    gulp.run("vendor");

    // watch me getting Sassy
    gulp.watch("./sass/**/*.scss", function(event){
        gulp.run('sass');
    });

    gulp.watch("*.html", function(event){
        gulp.run('html');
    });

    gulp.watch("./js/**/*.js", function(event){
        gulp.run('js');
    });
});
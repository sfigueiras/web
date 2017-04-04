// Gulp
var gulp = require('gulp');

// Sass/CSS stuff
var sass = require('gulp-sass');

var mustache = require('gulp-mustache');

var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

var rename = require("gulp-rename");

// JavaScript
var uglify = require('gulp-uglify');

// Images
var svgmin = require('gulp-svgmin');
var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');

// Stats and Things
var size = require('gulp-size');

var fs = require( 'fs' );
var path = require( 'path' );
var glob = require('glob');

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
        // .pipe(imagemin())
        .pipe(gulp.dest(BUILD_DIR + '/images'));
});

gulp.task('webp', function() {
    gulp.src('./images/*.jpg')
        .pipe(webp())
        .pipe(gulp.dest(BUILD_DIR  + '/images'));
});

gulp.task('manifest', function() {
    gulp.src([ './manifest/**'])
        .pipe(gulp.dest(BUILD_DIR + '/manifest'));
});

gulp.task('vendor', function() {
    gulp.src([ './vendor/**'])
        .pipe(gulp.dest(BUILD_DIR + '/vendor'));
});

gulp.task('templates', function() {

    glob('./templates/*.mustache', function(err, files) {
        console.info(files);
        files.forEach(function(file) {
            if(path.basename(file).startsWith('_')) {
                return;
            }

            console.log("path.basename(file).startsWith('_')", path.basename(file).startsWith('_'));
            console.log(file);

            var template = file;
            var data = path.dirname(template) + '/' + path.basename(template, '.mustache') + '.json';

            gulp.src(template)
                .pipe(rename(function(path) {
                    path.extname = '.html'
                }))
                .pipe(mustache(data))
                .pipe(gulp.dest(BUILD_DIR));
        });
    });
    
});

gulp.task('default', function(){
    gulp.run('html');
    gulp.run('manifest');
    gulp.run('images');
    gulp.run('webp');
    gulp.run("js");
    gulp.run("sass");
    gulp.run("vendor");
    gulp.run('templates');

    // watch me getting Sassy
    gulp.watch("./sass/**/*.scss", function(event){
        gulp.run('sass');
    });

    gulp.watch('./templates/*', function() {
        gulp.run('templates');
    });
    

    gulp.watch("*.html", function(event){
        gulp.run('html');
    });

    gulp.watch("./js/**/*.js", function(event){
        gulp.run('js');
    });
});
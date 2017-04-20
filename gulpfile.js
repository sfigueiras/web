// Gulp
var gulp = require('gulp');

// Sass/CSS stuff
var sass = require('gulp-sass');

var mustache = require('gulp-mustache');

var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

var rename = require("gulp-rename");
var del = require("del");

// JavaScript
var uglify = require('gulp-uglify');

// Images
var svgmin = require('gulp-svgmin');
var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');

// Stats and Things
var size = require('gulp-size');

var fs = require('fs');
var path = require('path');
var glob = require('glob');

var webserver = require('gulp-webserver');


var loadJsonFile = require('load-json-file');

var BUILD_DIR = './public';

gulp.task('clean', function () {
  return del([BUILD_DIR + '/*'], {
    dryRun: true
  }).then(function (paths) {
    console.log('Files and folders that would be deleted:\n', paths.join('\n'));
  });
});

gulp.task('webserver', function () {
  gulp.src(BUILD_DIR)
    .pipe(webserver({
      livereload: true,
      // directoryListing: true,
      open: true
    }));
});

// compile all your Sass
gulp.task('sass', function () {
  gulp.src(['./sass/*.scss', '!./sass/_variables.scss'])
    .pipe(sass({
      includePaths: ['./sass'],
      outputStyle: 'expanded'
    }))
    .pipe(prefix({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(BUILD_DIR + '/css'));
});

// Uglify JS
gulp.task('js', function () {
  gulp.src('./js/*.js')
    .pipe(gulp.dest(BUILD_DIR + '/js'));
});

gulp.task('html', function () {
  gulp.src(['*.html'])
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('images', function () {
  gulp.src(['./images/**'])
    // .pipe(imagemin())
    .pipe(gulp.dest(BUILD_DIR + '/images'));
  gulp.src(['./favicon.ico'])
    .pipe(gulp.dest(BUILD_DIR + '/favicon.ico'));
});

gulp.task('videos', function () {
  gulp.src('./videos/*.{mp4,ogv,webm}')
    .pipe(gulp.dest(BUILD_DIR + '/videos'));
});

gulp.task('webp', function () {
  gulp.src('./images/*.jpg')
    .pipe(webp())
    .pipe(gulp.dest(BUILD_DIR + '/images'));
});

gulp.task('manifest', function () {
  gulp.src(['./manifest/**'])
    .pipe(gulp.dest(BUILD_DIR + '/manifest'));
});

gulp.task('vendor', function () {
  gulp.src(['./vendor/**'])
    .pipe(gulp.dest(BUILD_DIR + '/vendor'));
});

gulp.task('templates', function () {
glob('./templates/*.mustache', function (err, files) {
  var commonConfigs = {};

  var commonPromises = [
    loadJsonFile('./templates/common.json').then(function (common) {
      commonConfigs['en'] = common;
    }),
    loadJsonFile('./templates/common-es.json').then(function (common) {
      commonConfigs['es'] = common;
    }),
  ];

  Promise.all(commonPromises).then(function () {
    files.forEach(function (file) {
      var langs = [{
        code: 'en',
        suffix: ''
      }, {
        code: 'es',
        suffix: '-es'
      }];

      langs.forEach(function (lang) {
        var template = file;
        var dict = path.dirname(template) + '/' + path.basename(template, '.mustache') + lang.suffix + '.json';

        loadJsonFile(dict).then(function (json) {
          Object.assign(json, commonConfigs[lang.code]);
          gulp.src(template)
            .pipe(rename(function (path) {
              path.basename += lang.suffix;
              path.extname = '.html';
            }))
            .pipe(mustache(json))
            .pipe(gulp.dest(BUILD_DIR));
        });
      });
    });

  });
});
});

gulp.task('build', function () {
  gulp.run('clean');
  gulp.run('html');
  gulp.run('manifest');
  gulp.run('images');
  gulp.run('videos');
  gulp.run('webp');
  gulp.run("js");
  gulp.run("sass");
  gulp.run("vendor");
  gulp.run('templates');

  // watch me getting Sassy
  gulp.watch("./sass/**/*.scss", function (event) {
    gulp.run('sass');
  });

  gulp.watch('./templates/*', function () {
    gulp.run('templates');
  });


  gulp.watch("*.html", function (event) {
    gulp.run('html');
  });

  gulp.watch("./js/**/*.js", function (event) {
    gulp.run('js');
  });
})

gulp.task('default', function () {
  gulp.run('build');
  gulp.run('webserver');
});

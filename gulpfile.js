var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var sass = require('gulp-sass');
var nano = require('gulp-cssnano');

gulp.task('sass', function() {
  return gulp.src('source/sass/*.sass')
    .pipe(sass())
    .pipe(nano())
    .pipe(gulp.dest('static/css'))
});

gulp.task('bundle', function() {
  return browserify('source/App.jsx')
    .transform('babelify', {presets: 'react'})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('static/'));
});

gulp.task('watch', function() {

  var b = browserify({
    entries: ['source/App.jsx'],
    cache: {}, packageCache: {},
    plugin: ['watchify']
  });

  b.on('update', makeBundle);

  function makeBundle() {
    b.transform('babelify', {presets: 'react'})
      .bundle()
      .on('error', function(err) {
        console.error(err.message);
        console.error(err.codeFrame);
      })
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('static/'));
    console.log("Bundle updated, success");
  }

  // we have to call bundle once to kick it off.
  makeBundle();

  return b;
});

gulp.task('default', ['watch']);

gulp.task('see', ['sass'], function() {
  gulp.watch('source/sass/*.sass', ['sass'])
});

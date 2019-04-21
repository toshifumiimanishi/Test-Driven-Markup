const gulp = require('gulp');
const sassVariables = require('gulp-sass-variables');
const sass = require('gulp-sass');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

function styles() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sassVariables({
      $mode: process.env.NODE_ENV
    }))
    .pipe(sass())
    .pipe(gulp.dest('dist/'));
}

exports.styles = styles;
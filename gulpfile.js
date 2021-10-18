const gulp = require ('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require ('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');


function style () {
  return gulp.src('./scss/style.scss')
             .pipe(sourcemaps.init())
             .pipe(sass())
             .pipe(autoprefixer({
                cascade: false
              }))
             .pipe(sourcemaps.write('./'))
             .pipe(gulp.dest('./css'))
}

function watch () {
  gulp.watch('./scss/**/*.scss', style)
}

exports.style = style;
exports.watch = watch;
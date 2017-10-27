var gulp            = require('gulp'),
    plumber         = require('gulp-plumber'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    nunjucksRender  = require('gulp-nunjucks-render')
    webpack         = require('webpack-stream');

gulp.task('assets', function () {
  gulp.src('src/assets/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('dist/assets'))
});

gulp.task('css', function () {
  gulp.src('src/css/main.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: ['last 20 versions']
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('nunjucks', function() {
  return gulp.src('src/pages/**/*.+(nunjucks)')
  .pipe(plumber())
  .pipe(nunjucksRender({
      path: ['src/templates']
    }))
  .pipe(gulp.dest('dist'))
});

// Watch asset folder for changes
gulp.task('watch', ['css', 'webpack', 'assets', 'nunjucks'], function () {
  gulp.watch('src/css/**/*', ['css']);
  gulp.watch('src/js/**/*', ['webpack']);
  gulp.watch('src/assets/**/*', ['assets']);
  gulp.watch('src/pages/**/*.+(html|nunjucks)', ['nunjucks']);

});

gulp.task('default', ['watch']);

gulp.task('webpack', function() {
  return gulp.src('src/js/main.js')
    .pipe(plumber())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});

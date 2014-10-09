/*
  Gulp.js configuration
  Compiles Sass
*/

// include gulp and plug-ins
var
  gulp = require('gulp'),
  sass = require('gulp-sass');

// constants
var
  src = 'src/',
  dst = '',
  css = {
    'in':  src + 'scss/main.scss',
    'out': dst + 'css/'
  };

// compile Sass
gulp.task('sass', function() {
  return gulp.src(css.in)
    .pipe(sass({
		imagePath: "../images",
		outputStyle: 'nested',
		precision: 3,
		errLogToConsole: true
	}))
    .pipe(gulp.dest(css.out));
});

// default task
gulp.task('default', ['sass'], function() {

  // CSS changes
  // gulp.watch(css.in, ['sass']);

});

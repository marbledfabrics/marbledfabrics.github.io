var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  gulp.src('./site.scss')
    .pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: [
        "Android 2.3",
        "Android >= 4",
        "Chrome >= 20",
        "Firefox >= 24",
        "Explorer >= 8",
        "iOS >= 6",
        "Opera >= 12",
        "Safari >= 6"
      ],
			cascade: false
		}))
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest('../'));
});

gulp.task('watch',function() {
  gulp.start('styles');
  gulp.watch('./*.scss',['styles']);
});

gulp.task('default',function() {
  gulp.start('styles');
});

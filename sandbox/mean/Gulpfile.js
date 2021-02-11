'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var dist = 'build';

gulp.task('unit', function()
{
	return gulp
		.src(['./assets/lib/**/*.js', './assets/js/*.js', './specs/*.unit.js'])
		.pipe($.jasminePhantom({ integration: true, includeStackTrace: true }));
});

gulp.task('integration', function()
{
	return gulp
		.src(['./assets/lib/**/*.js', './assets/js/*.js', './specs/*.integration.js'])
		.pipe($.jasminePhantom({ integration: true, includeStackTrace: true }));
});

gulp.task('specs', function()
{
	return gulp
		.src(['./assets/lib/**/*.js', './assets/js/*.js', './specs/*.js'])
		.pipe($.jasminePhantom({ integration: true, includeStackTrace: true }));
});

gulp.task('lint', function()
{
	return gulp
		.src('./assets/js/*.js')
		.pipe($.jshint())
		.pipe($.jshint.reporter('default'));
});

gulp.task('components', function()
{
	return gulp
		.src('./bower.json')
		.pipe($.mainBowerFiles())
		.pipe(gulp.dest('./assets/lib'));
});

gulp.task('scripts', function()
{
	return gulp
		.src(['./assets/lib/**/*.js', './assets/js/*.js'])
		.pipe($.concat('compiled.js'))
		.pipe($.streamify($.uglify()))
		.pipe(gulp.dest(dist));
});

gulp.task('styles', function()
{
	return gulp
		.src(['./assets/lib/**/**/**/**/*.css', './assets/css/*.css'])
		.pipe($.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe($.concat('bundled.css'))
		.pipe($.uglifycss({ 'max-line-len': 80 }))
		.pipe(gulp.dest(dist));
});

gulp.task('images', function()
{
	return gulp
		.src(['./assets/img/*.png', './assets/img/*.jpg', './assets/img/*.gif', './assets/img/*.jpeg'])
		.pipe($.imageOptimization({ optimizationLevel: 5, progressive: true, interlaced: true }))
		.pipe(gulp.dest(dist));
});

gulp.task('default', function() {});
gulp.task('default', ['specs', 'lint', 'components', 'scripts', 'styles', 'images']);

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    ngAnnotate = require('gulp-ng-annotate');

// Styles
gulp.task('styles', function() {
  return sass('app/src/styles/main.scss')
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('app/dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('app/dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }))
    .pipe(connect.reload());
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('app/src/scripts/**/*.js')
    .pipe(ngAnnotate())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('app/dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }))
    .pipe(connect.reload());
});

gulp.task('scriptVendors', function() {
  	return gulp.src(['bower_components/angular/angular.js','bower_components/angular-ui-router/release/angular-ui-router.js','bower_components/jquery/dist/jquery.js'])
      .pipe(ngAnnotate())
	    .pipe(concat('vendor.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest('app/dist/scripts'))
	    .pipe(connect.reload());
});
gulp.task('styleVendors', function() {
	return gulp.src(['bower_components/normalize-css/normalize.css'])
		.pipe(concat('vendor.css'))
	    .pipe(minifycss())
	    .pipe(gulp.dest('app/dist/styles'))
	    .pipe(notify({ message: 'Vendors task complete' }))
	    .pipe(connect.reload());
});
// Images
gulp.task('images', function() {
  return gulp.src('app/src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('app/dist/images'))
    .pipe(notify({ message: 'Images task complete' }))
    .pipe(connect.reload());
});

// Clean
gulp.task('clean', function() {
  return gulp.src(['app/dist'], {read: false})
    .pipe(clean());
});

//HTML
gulp.task('html', function(){
   gulp.src('app/src/**/*.html')
   .pipe(gulp.dest('app/dist'))
   .pipe(connect.reload())
});

//Fonts
gulp.task('font', function(){
   gulp.src('app/src/fonts/*.*')
   .pipe(gulp.dest('app/dist/fonts'))
   .pipe(connect.reload())
});

//Connect
gulp.task('connect', function(){
   connect.server({
       root:  'app/dist',
       livereload: true
   });
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts','scriptVendors','styleVendors','html','font','connect','watch');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('app/src/styles/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('app/src/scripts/**/*.js', ['scripts']);

  //Watch .html files
  gulp.watch('app/src/**/*.html' , ['html']);

  // Create LiveReload server
  var server = livereload();

  // Watch any files in dist/, reload on change
  gulp.watch(['app/dist/**']).on('change', function(file) {
    server.changed(file.path);
  });

});

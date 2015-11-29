'use strict';

var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');


// Loads the plugins without having to list all of them, but you need
// to call them as $.pluginname
var $ = require('gulp-load-plugins')();

//html
gulp.task('html', function () {
    gulp.src(['./src/**/*.html', './src/**/*.php', './src/**/*.json'])
  .pipe($.fileInclude({
    prefix: '@@',
    basepath: '@file'
  }))
    .pipe(gulp.dest('.tmp/'))
    .pipe($.connect.reload());
});

// Styles
gulp.task('styles', function() {
    return gulp.src([ 'src/scss/**/*.css', 'src/scss/**/*.scss'])
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer('last 2 version'))
    .pipe($.concat('main.css'))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.minifyCss())
    .pipe(gulp.dest('.tmp/css/'))
    .pipe($.connect.reload());
});

// Scripts
gulp.task('scripts', function() {
    gulp.src(['src/js/**/*.js', '!src/js/vendor/**'])
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter('default'));

    return gulp.src(['src/js/vendor/**','src/js/**/*.js'])
    .pipe($.concat('main.js'))
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest('.tmp/js'))
    .pipe($.connect.reload());
});

// Connect
gulp.task('connect', function() {
    $.connect.server({
        root: '.tmp',
        livereload: true,
        port: 8888
    });
});

// Clean
gulp.task('clean', function(cb) {
    return del(['.tmp/**','dist/**'], cb);
});

// Watch
gulp.task('watch', function() {
    gulp.watch(['./src/**/*.html'], ['html']);
    gulp.watch('./src/scss/**/*.scss', ['styles']);
    gulp.watch('./src/js/**/*.js', ['scripts']);
});

gulp.task('rev', function(){
    return gulp.src(['.tmp/**/**','!.tmp/**/**.html', '!.tmp/**/**.json'])
        .pipe($.rev())
        .pipe(gulp.dest('dist/'))
        .pipe($.rev.manifest())
        .pipe(gulp.dest('dist/'));
});

gulp.task('copyHTML', function(){
    return gulp.src(['.tmp/**/**.html'])
        .pipe($.useref())
        .pipe($.htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('revReplace', function(){

    var manifest = gulp.src('./dist/assets/rev-manifest.json');

    return gulp.src(['./dist/**/**.html', './dist/**/**.css'])
        .pipe($.revReplace({manifest: manifest}))
        .pipe(gulp.dest('dist/'));
});

// Default task
gulp.task('default', ['clean'], function() {
    runSequence('html', ['styles', 'scripts'], 'connect', 'watch');
});

// Build task
gulp.task('build', ['clean'], function(cb){
    runSequence('html', ['styles','scripts'], 'rev', 'copyHTML', 'revReplace', cb);
});

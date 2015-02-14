var gulp = require('gulp');
var shell = require('gulp-shell');
var wiredep = require('wiredep').stream;
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var atomdownload = require('gulp-download-atom-shell');

gulp.task('atom-download', function(cb) {
  atomdownload({
    version: '0.21.1',
    outputDir: 'binaries',
    downloadDir: 'downloads'
  }, cb);
});

gulp.task('atom-prep', function() {
  return gulp.src(['./src/main.js', './src/package.json'])
    .pipe(gulp.dest('./build'));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./build"
    }
  });
});

gulp.task('scripts', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('./build/js'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('sass', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/css'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('lint', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('html', function() {
  return gulp.src('./src/**/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./build'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.html', ['html']);
  gulp.watch('./src/js/**/*.js', ['lint', 'scripts']);
  gulp.watch('./src/scss/*.scss', ['sass']);
});

gulp.task('launch', shell.task([
  'binaries/Atom.app/Contents/MacOS/Atom build --proxy-server=127.0.0.1:3000'
]));

gulp.task('default', ['lint', 'sass', 'scripts', 'html', 'atom-prep', 'watch',
  'browser-sync',
  'launch'
]);

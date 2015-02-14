var gulp = require('gulp');
var shell = require('gulp-shell');
var wiredep = require('wiredep').stream;
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var downloadatomshell = require('gulp-download-atom-shell');

gulp.task('downloadatomshell', function(cb) {
  downloadatomshell({
    version: '0.21.1',
    outputDir: 'binaries'
  }, cb);
});

gulp.task('wiredep', function() {
  return gulp.src('./src/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./src'));
});

gulp.task('scripts', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('./build/js'));
});

gulp.task('sass', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('lint', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('html', function() {
  return gulp.src('./src/**/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', ['lint', 'scripts']);
  gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('launch', shell.task([
  'binaries/Atom.app/Contents/MacOS/Atom src'
]));

gulp.task('default', ['lint', 'sass', 'scripts', 'html', 'watch',
  'launch'
]);

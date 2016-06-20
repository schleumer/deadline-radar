var gulp = require("gulp");
var babel = require("gulp-babel");
var less = require("gulp-less");
var watch = require("gulp-watch");
var print = require("gulp-print");
var plumber = require('gulp-plumber');
var duration = require('gulp-duration');
var path = require('path');

var babelize = function (file) {
  return gulp.src(file, { base: 'src' })
      .pipe(duration("transpiling " + (Array.isArray(file) ? file.join(', ') : file)))
      .pipe(plumber())
      .pipe(babel())
      .pipe(gulp.dest("dist"));
}


gulp.task("babel", function () {
  return babelize(["src/javascript/**/*.js"]);
});

gulp.task("less", function() {
  return gulp.src(["src/less/app.less"], { base: 'src/less'})
    .pipe(watch("src/less/**/*.less"))
    .pipe(plumber())
    .pipe(less({paths: [path.join(__dirname, 'node_modules')]}))
    .pipe(gulp.dest("dist/css"));
})

gulp.task('copy-html', function() {
  return gulp.src("src/**/*.html", { base: 'src' })
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-fonts', function() {
  return gulp.src("src/fonts/**/*", { base: 'src/fonts' })
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task("watch-babel", function () {
  return watch("src/javascript/**/*.js", function (obj) {
    var file = path.relative(__dirname, obj.path);
    console.log(file);
    return babelize(file);
  });
});

gulp.task('watch-less', function() {
  return gulp.watch(["src/less/**/*.less"], ["less"]);
});

gulp.task('watch-copy-html', function() {
  return gulp.watch(["src/**/*.html"],   ["copy-html"]);
});

gulp.task('watch-copy-fonts', function() {
  return gulp.watch(["src/fonts/**/*"],   ["copy-fonts"]);
});

gulp.task('watch', [
  'babel',
  'watch-babel',
  'copy-html',
  'watch-copy-html',
  'less',
  //'watch-less',
  'copy-fonts',
  'watch-copy-fonts'
]);

gulp.task('default', [
  'babel',
  'copy-html',
]);
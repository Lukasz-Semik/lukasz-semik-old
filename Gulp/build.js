const gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
uglify = require('gulp-uglify'),
cssnano = require('gulp-cssnano'),
rev = require('gulp-rev'),
browserSync = require('browser-sync').create();

gulp.task('buildPreview', ()=>{
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  })
});

gulp.task('deleteBuildFolder', ()=>{
  return del('./docs');
})

gulp.task('copySprite', ['deleteBuildFolder'], ()=>{
  return gulp.src('./App/temp/sprites/*.png')
  .pipe(gulp.dest('./docs/sprites'));
})
gulp.task('copyFavicon', ['copySprite'], ()=>{
  return gulp.src('./App/*.ico')
  .pipe(gulp.dest('./docs'));
})
gulp.task('optimImages', ()=>{
  return gulp.src(['./App/assets/img/*', '!./App/assets/img/icons-proto'])
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))
  .pipe(gulp.dest('./docs/assets/img'));
})

gulp.task('useminStart', ()=>{
  gulp.start('usemin');
})

gulp.task('usemin', ['styles', 'scripts'], ()=>{
  return gulp.src('./App/index.html')
  .pipe(usemin({
    css: [function(){return rev()}, function(){return cssnano()}],
    js: [function(){return rev()}, function(){return uglify()}]
  }))
  .pipe(gulp.dest('./docs'));
})

gulp.task('build',['deleteBuildFolder', 'copySprite', 'copyFavicon', 'optimImages', 'useminStart']);

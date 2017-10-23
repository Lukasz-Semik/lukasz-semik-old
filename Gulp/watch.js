const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch', ()=>{
  browserSync.init({
    notify: false,
    server: {
      baseDir: "App"
    }
  })

  //HTML
  watch('./App/index.html', ()=>{
    browserSync.reload();
  });

  //CSS
  watch('./App/assets/styles/**/*.css', ()=>{
    gulp.start('cssInject');
  });

  //JAVASCRIPT
  watch('./App/assets/src/**/*.js', ()=>{
    gulp.start('scriptsRefresh')
  })

}) // <-- end of the watch.

gulp.task('cssInject', ['styles'], ()=>{
  return gulp.src('./App/temp/styles/main.css')
  .pipe(browserSync.stream())
});

gulp.task('scriptsRefresh', ['scripts'], ()=>{
  browserSync.reload();
})

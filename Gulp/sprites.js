const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');
const del = require('del');

gulp.task('sprite', ['cleanOld'] , function(){
  const spriteData = gulp.src('App/assets/img/icons-proto/*.png')
  .pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }))
  return spriteData.pipe(gulp.dest('App/temp/sprites/'));
})

gulp.task('cleanOld', function(){
  return del('./App/temp/sprites');
})

var gulp = require ('gulp');
var less = require ('gulp-less');


gulp.task('less', function() {
         gulp.src('./project/less/*.less') 
           .pipe(less())
    .pipe(gulp.dest('./project/css'));
          });

gulp.task('less:watch', function(){
gulp.watch('./project/less/*.less', ['less']);

});






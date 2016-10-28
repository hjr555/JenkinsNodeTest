var gulp = require('gulp');
var ts   = require('gulp-typescript');

gulp.task('default', function() {
    gulp.src('index.ts')
        .pipe(ts({
            target: 'es5'
        }))
        .pipe(gulp.dest('./'));
});

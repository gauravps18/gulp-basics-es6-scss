const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


gulp.task('uglify', () =>
    gulp.src('src/js/**/*.js')
        .pipe(uglify())
)

gulp.task('transpile', () =>
    gulp.src('src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
)

gulp.task('default', () =>
    gulp.src('src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'))
)
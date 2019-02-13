const gulp = require('gulp');
const  babelify = require('babelify');
const uglify = require('gulp-uglify');
const browserify = require('browserify');


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

gulp.task('scripts', () =>
    browserify({
        entries: ['src/js/app.js']
    })
    .transform(babelify, {
        presets: ['@babel/preset-env']
    })
    .bundle()
    //.pipe(uglify())
    .pipe(gulp.dest('dist'))
)

gulp.task('default', () =>
    gulp.src('src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
)
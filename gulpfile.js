const gulp = require('gulp');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const del = require('del');
const webserver = require('gulp-webserver');


gulp.task('clean', () =>
    del('dist/**', {force:true})
)

gulp.task('scripts', gulp.series('clean', () =>
    browserify('src/js/app.js')
    .transform(babelify, {
        "presets": ["env"]
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(rename({extname: '.min.js'}))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'))
))

gulp.task('index', () =>
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
)

gulp.task('build', gulp.series('scripts', 'index'))

gulp.task('serve', gulp.series('build', () =>
    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            directoryListening: true,
            open: true
        }))
))

gulp.task('default', gulp.series('build'))
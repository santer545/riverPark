/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    browserSync = require('browser-sync'),
    del = require('del'),
    replace = require('gulp-replace'),
    rigger = require('gulp-rigger'),
    sourcemaps = require('gulp-sourcemaps');

// Styles
gulp.task('styles', function () {
    return gulp.src('scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 4 version'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({ message: 'Styles task complete' }));
});


gulp.task('rigger', function () {
    gulp.src('template/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('dist/'));
});




// Local server
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});


// настройки путей к файлам
var rootDir = '.';
var sourceDir = rootDir + '/js'; // здесь хранятся все исходники
var destDir = rootDir + '/dist'; // здесь хранится все на выходе

// Scripts
gulp.task('scripts', function () {
    return gulp.src([
        sourceDir + '/jquery.2.2.1.js',
        sourceDir + '/jquery.mask.js',
        sourceDir + '/ion.rangeSlider.js',
        sourceDir + '/slick.min.js',
        sourceDir + '/modal.js',
        sourceDir + '/tooltipster.bundle.js',
        sourceDir + '/home-main.js'
    ])

        //.pipe(browserify(components.scripts.options))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('carousel-scripts', function () {
    return gulp.src([
        sourceDir + '/slick.min.js',
        sourceDir + '/carousel-settings.js',
    ])

        //.pipe(browserify(components.scripts.options))
        .pipe(concat('carousel.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('scriptsPlay', function () {
    return gulp.src([
        sourceDir + '/video-play.js',
    ])

        //.pipe(browserify(components.scripts.options))
        .pipe(concat('video.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});



// Clean
gulp.task('clean', function () {
    return del(['dist/css', 'dist/js', 'dist/images']);
});

// Default task
gulp.task('default', function () {
    gulp.start('styles', 'scripts', 'carousel-scripts', 'scriptsPlay');
});

gulp.task('server', function () {
    gulp.start('default', 'watch', 'browser-sync', 'rigger');
});


// Watch
gulp.task('watch', function () {

    // Watch .scss files
    gulp.watch('scss/**/*.scss', ['styles', browserSync.reload]);

    // Watch .js files
    gulp.watch('js/**/*.js', ['scripts', browserSync.reload]);

    gulp.watch('js/**/*.js', ['scriptsPlay', browserSync.reload]);

    //gulp.watch('assets/svg/**/*', ['svgSprite', browserSync.reload]);
    gulp.watch('template/*.html', ['rigger', browserSync.reload]);

});
'use strict';

//import gulp and plugins
const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-ruby-sass');
const rigger = require('gulp-rigger');// http://buildjs.github.io/rigger/
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const optipng = require('imagemin-optipng');
const browserSync = require('browser-sync');

//our paths to files
var path = {
    //where we add ready files
    build: {
      html: 'build/',
      style: 'build/css/',
      js: 'build/js/',
      img: 'build/img',
      fonts: 'build/fonts'
    },
    //where are working files
    src: {
      html: 'src/*.html',
      style: 'src/sass/app.sass',
      js: 'src/js/app.js',
      img: 'src/img/**/*.*',
      fonts: 'src/fonts/**/*.*'
    },
    //files to watch
    watch: {
      html: 'src/**/*.html',
      style: 'src/sass/**/*.sass',
      js: 'src/js/**/*.*',
      img: 'src/img/**/*.*',
      fonts: 'src/fonts/**/*.*'
    },
    //for quick removing build-folder
    rm: './build'
};

//browserSync settings
var reload = browserSync.reload,
    config = {
    server: {
      baseDir: './build'
    },
    files: [path.build.html + '*.html', path.build.style + '*.css', path.build.js + '*.js'],
    host: 'localhost',
    port: '8080',
    notify: false,
    logPrefixed: 'DevilLivesHere'
};

//task for HTML
gulp.task('html:build', () => {
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream: true}));
});

//task for JS
gulp.task('js:build', () => {
  gulp.src(path.src.js)
    .pipe(rigger())
    .pipe(babel())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({stream: true}));
});

//task for SASS
gulp.task('style:build', () => {
  gulp.src(path.src.style)
    sass(path.src.style, {
      sourcemap: true,
      style: 'compact',
      emitCompileError: true
    })
    .on('error', notify.onError({
      title: 'SASS error!',
      message: '<%= error.message %>'
    }))
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.build.style))
    .pipe(reload({stream: true}));
});

//task for pictures
gulp.task('image:build', () => {
  gulp.src(path.src.img)
    .pipe(imagemin({
      progressive: true,
      use: [optipng()],
      interlaced: true
    }))
    .pipe(gulp.dest(path.build.img))
    .pipe(reload({stream: true}));
});

//task for fonts
gulp.task('fonts:build', () => {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
  'html:build',
  'js:build',
  'style:build',
  'image:build',
  'fonts:build'
]);

gulp.task('watch', () => {
  gulp.watch(path.watch.html, ['html:build']);
  gulp.watch(path.watch.js, ['js:build']);
  gulp.watch(path.watch.style, ['style:build']);
  gulp.watch(path.watch.img, ['image:build']);
  gulp.watch(path.watch.fonts, ['fonts:build']);
});

gulp.task('webserver', () => {
  browserSync(config);
});

gulp.task('default', ['build', 'webserver', 'watch']);

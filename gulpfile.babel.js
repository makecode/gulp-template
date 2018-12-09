import gulp from 'gulp';
import del from 'del';
import { reload } from 'browser-sync';
// import prettify from 'gulp-prettify';
// import notify from 'gulp-notify';
// import plumber from 'gulp-plumber';

import { path } from './gulp/config';
import html from './gulp/html';
import js from './gulp/js';
import styles from './gulp/styles';
import images from './gulp/images';
import fonts from './gulp/fonts';
import server from './gulp/server';

const watchFiles = () => {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.styles, styles);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.fonts, fonts);
  gulp.watch([path.watch.html, path.watch.styles, path.watch.js, path.watch.images, path.watch.fonts], reload);
}

export const clean = () => del(['build']);

const watch = gulp.parallel(watchFiles, server);
const build = gulp.series(clean, gulp.parallel(html, styles, js, images, fonts));

// register build task
gulp.task('build', build);
//register watch task
gulp.task('watch', watch);
import { src, dest } from 'gulp';
import { stream } from 'browser-sync';
import { path } from './config';

import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

const styles = () => 
  src(path.src.styles)
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'compact'
  })).on('error', sass.logError)
  .pipe(postcss([autoprefixer({browsers: ['last 10 versions']})]))
  .pipe(sourcemaps.write())
  .pipe(dest(path.build.styles))
  .pipe(stream());

export default styles;
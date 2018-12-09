import { src, dest } from 'gulp';
import { stream } from 'browser-sync';
import { path } from './config';

import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';

const images = () => 
  src(path.src.images)
  .pipe(changed(path.build.images))
  .pipe(imagemin({ progressive: true }))
  .pipe(dest(path.build.images))
  .pipe(stream());

export default images;
import { src, dest } from 'gulp';
import { stream } from 'browser-sync';
import { path } from './config';

import babel from 'gulp-babel';
import include from 'gulp-include';

const js = () => 
  src(path.src.js)
  .pipe(include())
  .pipe(babel())
  .pipe(dest(path.build.js))
  .pipe(stream());

export default js;
import { src, dest } from 'gulp';
import { stream } from 'browser-sync';
import { path } from './config';

import include from 'gulp-include';

const html = () => 
  src(path.src.html)
  .pipe(include())
  .pipe(dest(path.build.html))
  .pipe(stream());

export default html;
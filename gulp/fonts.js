import { src, dest } from 'gulp';
import { path } from './config';

const fonts = () => 
  src(path.src.fonts)
  .pipe(dest(path.build.fonts));

export default fonts;
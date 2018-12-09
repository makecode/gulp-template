export const path = {
  src: {
    html: 'src/pages/*.html',
    partials: 'src/pages/partials',
    styles: 'src/styles/style.sass',
    js: 'src/js/app.js',
    images: 'src/media/images/**/*.*',
    fonts: 'src/media/fonts/*.*'
  },
  build: {
    html: 'build/',
    styles: 'build/css/',
    js: 'build/js/',
    images: 'build/images/',
    fonts: 'build/fonts/'
  },
  watch: {
    html: 'src/pages/**/*.html',
    styles: 'src/styles/**/*.sass',
    js: 'src/js/**/*.js',
    images: 'src/media/images/**/*.*',
    fonts: 'src/media/fonts/**/*.*'
  }
};
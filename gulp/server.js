import browserSync from 'browser-sync';

const server = () => {  
  browserSync.init({
    server: {
      baseDir: './build'

    },
    host: 'localhost',
    port: '8080',
    open: false,
    notify: false
  });
};

export default server;
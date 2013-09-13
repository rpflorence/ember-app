module.exports = {
  vendor: {
    files: [
      {
        expand: true,
        cwd: 'bower_components/',
        src: '**/*.js',
        dest: 'build/bower_components'
      }
    ]
  },
  html: {
    files: [
      {
        cwd: './',
        src: 'index.html',
        dest: 'build/'
      }
    ]
  }
};


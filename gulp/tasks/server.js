export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.build.html}`,
    },
    notify: false, //messages in browser
    port: 3000,
  });
};

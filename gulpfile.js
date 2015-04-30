var gulp = require("gulp"),
    gutil = require("gulp-util"),
    webpack = require("webpack"),
    webpackConf = require("./webpack.config.js");

gulp.task("default", ["build-dev"]);

gulp.task("build-dev", ["webpack:build-dev"], function () {
  gulp.watch(["assets/**/*"], ["webpack:build-dev"]);
});

var myDevConfig = Object.create(webpackConf);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
  devCompiler.run(function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build-dev", err);
    gutil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});

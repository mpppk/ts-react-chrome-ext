const path = require("path");
const { override, disableChunk } = require("customize-cra");

module.exports = {
  webpack: function(config, env) {
    // ビルドするファイルを追加
    config.entry = {
      main: [path.resolve("src/index")],
      content_script: [path.resolve("src/content_script")],
      hot_reload: [path.resolve("src/hot_reload")]
    };

    // ファイル名にhashが含まれないようにする
    config.output.filename = "static/js/[name].js";

    // 画像ファイルは必ずJSに含めるようにし、svgもその対象にする
    config.module.rules[2].oneOf[0].options.limit = true;
    config.module.rules[2].oneOf[0].test.push(/\.svg$/);

    // mini-css-extract-pluginの設定にstyle-loaderを上書きすることでcssをjsに含める
    config.module.rules[2].oneOf[3].use[0] = {
      loader: require.resolve("style-loader")
    };

    return override(
      // chunk化しない
      disableChunk()
    )(config, env);
  }
};
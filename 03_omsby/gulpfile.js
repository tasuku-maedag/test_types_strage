/* *************************
 * Gulp Tasks For OMSBY
 * /src/03_omsby/gulpfile.js
 */

// gulpプラグインを読み込み

//const { src, dest, watch } = require("gulp");
const { src, dest, series, watch } = require("gulp");
const plumber = require("gulp-plumber");

// Sassをコンパイルするプラグインを読み込みます
const sass = require("gulp-sass");
//const cleanCss = require('gulp-clean-css');
// *** dart-sass に関する指定 ***
sass.compiler = require("sass"); // コンパイルパッケージの指定(node_module内のsass=dartsass)
const Fibers = require("fibers"); // dart sass コンパイルの最適化パッケージ

// ファイル操作するプラグイン
const rename = require("gulp-rename");
const replace = require("gulp-replace");

/* ****************
 * Tasks For OMSBY
 * **************** */

const transpileOMSBYSass = () =>
  // .scssファイルを取得
  //src("./src/03_omsby/css/sass/*.scss")
  src("./css/sass/*.scss")
  // watch 実行中のエラーを標準出力。watchを停止せず継続する (notifyはうっといので一旦保留)
  .pipe(plumber())
  // Sassのコンパイルを実行
  .pipe(
    // コンパイル後のCSS形式指定
    sass({
      fiber:Fibers, // おまじないパッケージの呼び出し
      //outputStyle: "compressed"
      outputStyle: "compact"
    })
  )
  // ファイル名を修飾
  .pipe(rename({extname: '.min.css'}))
  // 保存先 (※CSSの出力先がSassの取得元と異なるので、renameだけで通ってます)
  //.pipe(dest("./src/03_omsby/css"));
  .pipe(dest("./css"));

  exports.dartsass = transpileOMSBYSass;


/*
 * gulp.watch を使用してsassを監視、変更時にトランスパイルを実行します。
 * ↑のcompileDartSassを使用します。
 */ 
const watch_compileDartSass = () =>
// gulp の watch で ↑上のタスクを監視実行
watch(
  // 監視するディレクトリ(と具体的なファイル)指定
  "./css/sass/*.scss",
  // ファイル差分発生時に実行するタスク
  series('dartsass')
);

exports.watch_sass = watch_compileDartSass;

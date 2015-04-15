var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
// bundle の返したファイルストリームを vinyl に変換
var del = require('del');
// ファイル削除
var runSequence = require('run-sequence');
// 依存関係を設定せずに順序を指定するのに便利
var reactify = require('reactify');
// JSX記法をReactの記法に変換

var outputFile = 'bundle.js';
var outputPath = './build/js/';
var entries = ['./app.js'];

var customOpts = {
  entries: entries,
  debug: false,
  transform: [reactify]
};

gulp.task('clean', function() {
  del([outputPath, outputFile]);
});

gulp.task('js', function () {
  browserify(customOpts)
    .bundle()
    .pipe(source(outputFile)) // <- ここで vinyl になる！
    .pipe(gulp.dest(outputPath));
});

gulp.task('build', function() {
  runSequence('clean', 'js');
});
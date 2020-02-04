const gulp = require(`gulp`);
const sass = require(`gulp-sass`);
const plumber = require(`gulp-plumber`);
const sourcemap = require(`gulp-sourcemaps`);
const postcss = require(`gulp-postcss`);
const autoprefixer = require(`autoprefixer`);
const server = require(`browser-sync`).create();
const csso = require(`gulp-csso`);
const rename = require(`gulp-rename`);
const imagemin = require(`gulp-imagemin`);
const posthtml = require(`gulp-posthtml`);
const modules = require(`posthtml-modules`);
const del = require(`del`);
const htmlmin = require(`gulp-htmlmin`);
const rollup = require(`gulp-better-rollup`);
const mocha = require(`gulp-mocha`); // Добавим установленный gulp-mocha плагин
const commonjs = require(`rollup-plugin-commonjs`); // Добавим плагин для работы с `commonjs`

gulp.task(`clean`, function () {
  return del(`build`);
});

gulp.task(`test`, function () {
  return gulp
  .src([`source/js/tests/**/*.test.js`])
  .pipe(rollup({
    plugins: [
      commonjs() // Сообщает Rollup, что модули можно загружать из node_modules
    ]}, `cjs`))// Выходной формат тестов — `CommonJS` модуль
  .pipe(gulp.dest(`build/test`))
  .pipe(mocha({
    reporter: `spec`// Вид в котором я хочу отображать результаты тестирования
  }));
});


gulp.task(`copy`, function () {
  return gulp.src([
    `source/fonts/**/*.{woff,woff2}`,
    `source/img/*.*`,
    `source/*.ico`,
    `source/music/*.mp3`,
    `source/logo/*.*`
  ], {base: `source`})

  .pipe(gulp.dest(`build`));
});

gulp.task(`css`, function () {
  return gulp.src(`source/sass/app.scss`)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename(`style.min.css`))
    .pipe(sourcemap.write(`.`))
    .pipe(gulp.dest(`build/css`))
    .pipe(server.stream());
});

gulp.task(`scripts`, function () {
  return gulp.src(`source/js/main.js`)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(rollup({}, `iife`))
    .pipe(sourcemap.write(``))
    .pipe(gulp.dest(`build/js`));
});

gulp.task(`imgOpt`, () => {
  return gulp.src(`source/img/**/*.{gif,jpeg,jpg,png,svg}`)
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest(`img`));
});

gulp.task(`html`, function () {
  return gulp.src(`source/*.html`)
  .pipe(posthtml([
    modules()
  ]))
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest(`build`));
});

gulp.task(`build`, gulp.series(
    `clean`,
    `copy`,
    `css`,
    `scripts`,
    `imgOpt`,
    `html`
));

gulp.task(`server`, function () {
  server.init({
    server: `build/`,
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch(`source/sass/**/*.scss`, gulp.series(`css`));
  // gulp.watch(`source/img/icon-*.svg`, gulp.series(`sprite`, `html`, `refresh`));
  // gulp.watch(`source/img/*.jpg`, gulp.series(`imagemin`, `refresh`));
  gulp.watch(`source/components/*.html`, gulp.series(`html`, `refresh`));
  gulp.watch(`source/*.html`, gulp.series(`html`, `refresh`));
  gulp.watch(`source/js/**/*.js`, gulp.series(`scripts`, `refresh`));
});

gulp.task(`refresh`, function (done) {
  server.reload();
  done();
});

gulp.task(`start`, gulp.series(`build`, `server`));

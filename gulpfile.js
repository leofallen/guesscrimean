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
const webp = require(`gulp-webp`);
const svgstore = require(`gulp-svgstore`);
const posthtml = require(`gulp-posthtml`);
const modules = require(`posthtml-modules`);
const del = require(`del`);
const mozjpeg = require(`imagemin-mozjpeg`);
// const minify = require(`gulp-minify`);
const htmlmin = require(`gulp-htmlmin`);
const rollup = require(`gulp-better-rollup`);

gulp.task(`clean`, function () {
  return del(`build`);
});

gulp.task(`copy`, function () {
  return gulp.src([
    `source/fonts/**/*.{woff,woff2}`
  ], {base: `source`})

  .pipe(gulp.dest(`build`));
});

gulp.task(`css`, function () {
  return gulp.src(`source/sass/style.scss`)
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

// gulp.task(`minjs`, function () {
//   return gulp.src([`source/js/main.js`])
//   .pipe(plumber())
//   .pipe(sourcemap.init())
//   .pipe(minify())
//   .pipe(sourcemap.write(``))
//   .pipe(gulp.dest(`build/js`))
//   .pipe(server.stream());
// });

gulp.task(`scripts`, function () {
  return gulp.src(`source/js/modules/main.js`)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(rollup({}, `iife`))
    .pipe(sourcemap.write(``))
    .pipe(gulp.dest(`build/js`));
});

gulp.task(`imagemin`, function () {
  return gulp.src(`source/img/**/*.{png,jpg,svg}`)
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    mozjpeg({quality: 85}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest(`build/img`));
});

gulp.task(`webp`, function () {
  return gulp.src(`build/img/**/*.{png,jpg}`)
  .pipe(webp({quality: 92}))
  .pipe(gulp.dest(`build/img`));
});

gulp.task(`sprite`, function () {
  return gulp.src(`source/img/icon-*.svg`)
  .pipe(svgstore({
    inlineSvg: true
  }))

  .pipe(rename(`sprite.svg`))
  .pipe(gulp.dest(`build/img`));
});

gulp.task(`imgOpt`, gulp.series(
    `imagemin`,
    `webp`,
    `sprite`
));

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
  gulp.watch(`source/img/icon-*.svg`, gulp.series(`sprite`, `html`, `refresh`));
  gulp.watch(`source/img/*.jpg`, gulp.series(`imagemin`, `refresh`));
  gulp.watch(`source/components/*.html`, gulp.series(`html`, `refresh`));
  gulp.watch(`source/*.html`, gulp.series(`html`, `refresh`));
  gulp.watch(`source/js/modules/**/*.js`, gulp.series(`scripts`, `refresh`));
});

gulp.task(`refresh`, function (done) {
  server.reload();
  done();
});

gulp.task(`start`, gulp.series(`build`, `server`));

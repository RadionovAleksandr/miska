"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var rename = require("gulp-rename");
var server = require("browser-sync").create();
var run = require("run-sequence");
var del = require("del");
var webp = require("imagemin-webp");
var extReplace = require("gulp-ext-replace");
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
// var babel = require('rollup-plugin-babel');
// var resolve = require('rollup-plugin-node-resolve');
// var commonjs = require('rollup-plugin-commonjs');

// gulp.task('scripts', () => {
//     return gulp.src('js/mishka.js')
//         // ...
//         .pipe(rollup({
//             plugins: [
//                 //resolve node_modules
//                 resolve({ browser: true }),
//                 //resolve commonjs imports
//                 commonjs(),
//                 //use babel to transpile into ES5
//                 babel({
//                     babelrc: false,
//                     exclude: 'node_modules/**',
//                     present: ['@babel/env']
//                 })
//             ]
//         }, 'iife'))
//         // 
// });


gulp.task("clean", function() {
    return del("build");
});

gulp.task("copy", function() {
    return gulp.src([
            "fonts/**/*.{woff,woff2}",
            "img/**",
            "js/**",
            "css/*"
        ], {
            base: "."
        })
        .pipe(gulp.dest("build"));
});

gulp.task("style", function() {
    console.log("Запускаю команду style");
    gulp.src("less/style.less")
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("css"))
        .pipe(minify())
        .pipe(gulp.dest("build/css"))
        .pipe(server.stream());
});

gulp.task("sprite", function() {
    return gulp.src("img/icon-*.svg")
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename("sprite.svg"))
        .pipe(gulp.dest("build/img"));
});

gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(posthtml([
            include()
        ]))
        .pipe(gulp.dest('build'))
});

gulp.task('js', function() {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest("build/js"));
});

gulp.task("exportWebP", function() {
    let src = "img/**/*.{png,jpg}";
    let dest = "img";

    return gulp.src("img/**/*.{png,jpg}")
        .pipe(imagemin([webp({ quality: 90 })]))
        .pipe(extReplace(".webp"))
        .pipe(gulp.dest("img"));
});

gulp.task("images", function() {
    return gulp.src("img/**/*.{png,jpg,svg}")
        .pipe(imagemin([
            imagemin.optipng({ optimizationLevel: 3 }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest("img"));
});

gulp.task("serve", function() {
    server.init({
        server: "/build",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("less/**/*.less", ["style"]);
    gulp.watch("*.html", ["html"]);
});

gulp.task("build", function(done) {
    run("clean", "copy", "style", "sprite", "html", "js", done);
});
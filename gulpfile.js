var gulp = require("gulp");

gulp.task("copy:html", function() {
  return gulp.src("src/**/*.html")
    .pipe(gulp.dest("dist/amd"))
    .pipe(gulp.dest("dist/commonjs"))
    .pipe(gulp.dest("dist/es2015"))
    .pipe(gulp.dest("dist/native-modules"))
    .pipe(gulp.dest("dist/system"));
});

gulp.task("copy:css", function() {
  return gulp.src("src/**/*.css")
    .pipe(gulp.dest("dist/amd"))
    .pipe(gulp.dest("dist/commonjs"))
    .pipe(gulp.dest("dist/es2015"))
    .pipe(gulp.dest("dist/native-modules"))
    .pipe(gulp.dest("dist/system"));
});

gulp.task("copy:json", function() {
  return gulp.src("src/**/*.json")
    .pipe(gulp.dest("dist/amd"))
    .pipe(gulp.dest("dist/commonjs"))
    .pipe(gulp.dest("dist/es2015"))
    .pipe(gulp.dest("dist/native-modules"))
    .pipe(gulp.dest("dist/system"));
});

gulp.task("default", ["copy:html", "copy:css", "copy:json"]);

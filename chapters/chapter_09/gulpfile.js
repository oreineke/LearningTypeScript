let gulp = require("gulp");
let tslint = require("gulp-tslint");

gulp.task("default", function() {
    console.log("Hello Gulp!");
});

gulp.task("lint", function() {

    let program = tslint.Linter.createProgram("./tsconfig.json");
    
    return gulp.src([
        "src/**/**.ts",
        "test/**/**.test.ts"
    ])
    .pipe(gulpTslint({
        formatter: "stylish",
        program
    }))
    .pipe(gulpTslint.report());

});


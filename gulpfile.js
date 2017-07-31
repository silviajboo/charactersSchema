var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var beep = require('beepbeep'); 
var colors = require('colors'); 
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin'); 
var pngquant = require('imagemin-pngquant');
var ghPages = require('gulp-gh-pages');

var onError = function(err) {
    beep([200, 200]);
    console.log(
        '\n\n****************************************************\n'.bold.gray +
        '*****************'.bold.gray + ' \(╯°□°)╯'.bold.red + ' ︵ '.bold.gray + 'ɹoɹɹǝ '.bold.blue + '*****************'.bold.gray +
        '\n****************************************************\n\n'.bold.gray +
        String(err) +
        '\n\n*******************************************************\n\n'.bold.gray);
    this.emit('end');
};

gulp.task('css', function() {
    return gulp.src('src/scss/style.scss')
        //pipe encadena todas las funciones que le añadamos
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: [
                'last 2 versions',
                '> 1%'
            ]
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('imgmin', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));

});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('default', function() {
    browserSync.init({
        server: { baseDir: "./dist" },
        files: ['./dist/css/style.css']
    });
    gulp.watch('./src/scss/**/*.scss', ['css']);
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
})

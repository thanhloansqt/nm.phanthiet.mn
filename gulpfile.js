var gulp = require('gulp')
// pug
var pug = require('gulp-pug');
// css (sass)
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
/* pug to HTML*/
gulp.task('pug', function() {
	gulp.src('./src/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest('./dist'))
	.pipe(browserSync.stream({ once: true }))
});

// =============================================
// browser-sync
//
gulp.task('browser-sync', () => {
  browserSync.init(CONFIG.browserSync)
});

gulp.task('watch', function() {
	gulp.watch('./src/*.pug', ['pug'])
});


// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "D:/education/nm.phanthiet.mn/dist/"
        }
    });

    gulp.watch("*.html").on("change", reload);
});

// auto review
gulp.task('default', ['pug', 'watch', 'serve']);

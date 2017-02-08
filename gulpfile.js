var gulp = require('gulp')
// pug
var pug = require('gulp-pug');
// css (sass)
var sass = require('gulp-sass');


/* pug to HTML*/
gulp.task('pug', function() {
	gulp.src('./src/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest('./dist'))
})


gulp.task('watch', function() {
	gulp.watch('./src/*.pug', ['pug'])
});
// auto review
gulp.task('default', ['pug', 'watch']);

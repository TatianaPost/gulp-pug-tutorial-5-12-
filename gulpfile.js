var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var htmlbeautify = require('gulp-html-beautify');

var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

var del = require('del');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');


gulp.task('pug', function() {
    return gulp.src('./src/pug/pages/**/*.pug')
    	.pipe(plumber({
			errorHandler: notify.onError(function(err){
				return {
					title: 'Pug',
					sound: false,
					message: err.message
				}
			})
		}))
		.pipe(pug())
		.pipe(htmlbeautify(htmlbeautifyOptions))
		.pipe(gulp.dest('./build'));
		// .pipe(browserSync.stream());
});

var htmlbeautifyOptions = {
	"indent_size": 1,
	"indent_char": "	",	
	"eol": "\n",
	"indent_level": 0,
	"indent_with_tabs": true,
	"preserve_newlines": false,
	"max_preserve_newlines": 10,
	"jslint_happy": false,
	"space_after_anon_function": false,
	"brace_style": "collapse",
	"keep_array_indentation": false,
	"keep_function_indentation": false,
	"space_before_conditional": true,
	"break_chained_methods": false,
	"eval_code": false,
	"unescape_strings": false,
	"wrap_line_length": 0,
	"wrap_attributes": "auto",
	"wrap_attributes_indent_size": 4,
	"end_with_newline": false
}


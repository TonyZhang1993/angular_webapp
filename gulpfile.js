var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
	srcPath: 'src/',
	devPath: 'build/',
	prdPath: 'dist/'
};

gulp.task('lib',function() {
	gulp.src('bower_components/**/*')  //对文件夹深度遍历，并读取
	.pipe(gulp.dest(app.devPath + 'vendor'))   //写入文件 pipe链式操作
	.pipe(gulp.dest(app.prdPath + 'vendor'))
	.pipe($.connect.reload());             //自动刷新页面

}); 

gulp.task('html',function() {
	gulp.src(app.srcPath + '/**/*')
	.pipe(gulp.dest(app.devPath))
	.pipe(gulp.dest(app.prdPath))
	.pipe($.connect.reload());

});

gulp.task('json',function() {
	gulp.src(app.srcPath + 'data/**/*.json')  //对文件夹深度遍历，并读取
	.pipe(gulp.dest(app.devPath + 'data'))
	.pipe(gulp.dest(app.prdPath + 'data'))
	.pipe($.connect.reload());
});

gulp.task('less',function() {
	gulp.src(app.srcPath + 'style/index.less')
	.pipe($.plumber())
	.pipe($.less())
	.pipe(gulp.dest(app.devPath + 'css'))   //还需要对less文件进行编译
	.pipe($.cssmin())
	.pipe(gulp.dest(app.prdPath + 'css'))
	.pipe($.connect.reload());
});

gulp.task('js',function() {
	gulp.src(app.srcPath + 'script/**/*.js')
	.pipe($.plumber())
	.pipe($.concat('index.js'))          //js文件合并成一个文件
	.pipe(gulp.dest(app.devPath + 'js'))
	.pipe($.uglify())                    //文件压缩
	.pipe(gulp.dest(app.prdPath + 'js'))
	.pipe($.connect.reload());

});

gulp.task('img',function(){
	gulp.src(app.srcPath + 'image/**/*')
	.pipe($.plumber())
	.pipe(gulp.dest(app.devPath + 'image'))	
	.pipe($.imagemin())                   //图片压缩
	.pipe(gulp.dest(app.prdPath + 'image'))
	.pipe($.connect.reload());	
});


gulp.task('build' , ['img' , 'js' , 'less' , 'json' , 'html' , 'lib']);
//执行上面的执行，集成在build里

gulp.task('clean',function(){          //有新文件生成，清除旧的文件
	gulp.src([app.devPath, app.prdPath])
	.pipe($.clean());
});

gulp.task('serve', ['build'],function(){   //用gulp指令编译代码，并且启动服务
	$.connect.server({         //启动一个服务器
		root: [app.devPath],   //读取服务的目录
		livereload: true,      //针对高级浏览器，实现自动刷新
		port: 1234
	});
	open('http://localhost:1234');

	gulp.watch('bower_components/**/*', ['lib']);    //改变以上目录时，自动执行该任务
	gulp.watch(app.srcPath + '**/*.html', ['html']);
	gulp.watch(app.srcPath + 'script/**/*.js' , ['js']);  //改变文件自动刷新
	gulp.watch(app.srcPath + 'data/**/*.json' , ['json']);
	gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
	gulp.watch(app.srcPath + 'image/**/*', ['image']);
});

gulp.task('default' , ['serve']);    //gulp 即执行 gulp serve
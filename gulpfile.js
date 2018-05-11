const gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    imageminPngquant = require('imagemin-pngquant');

const plugin_src = {
    images: [
        'wp-content/uploads/**/*.svg',
        'wp-content/uploads/**/*.png',
        'wp-content/uploads/**/*.jpeg',
        'wp-content/uploads/**/*.jpg'
    ],

};

gulp.task('images', function () {
    return gulp.src(plugin_src.images)
        .pipe(plugins.plumber())
        .pipe(plugins.imagemin([
            plugins.imagemin.gifsicle({interlaced: true}),
            imageminJpegRecompress({
                progressive: true,
                max: 80,
                min: 70
            }),
            imageminPngquant({quality: '80'}),
            plugins.imagemin.svgo({plugins: [{removeViewBox: true}]})
        ]))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
});


gulp.task('default', ['images']);

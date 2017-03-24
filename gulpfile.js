    gulp = require('gulp'),
    stylus = require('gulp-stylus'), // Плагин для Stylus
    watch = require('gulp-watch'),
    autoprefixer = require ('autoprefixer-stylus'),
    myth = require('gulp-myth'), // Плагин для Myth - http://www.myth.io/
    csso = require('gulp-csso'), // Минификация CSS
    imagemin = require('gulp-imagemin'), // Минификация изображений
    uglify = require('gulp-uglify'), // Минификация JS
    concat = require('gulp-concat'), // Склейка файлов
    nib = require('nib'),
    jquery = require('jquery');

// Собираем Stylus
gulp.task('stylus', function() {
    gulp.src(['./assets/stylus/style.styl', './node_modules/ion-rangeslider/css/ion.rangeSlider.css','./node_modules/ion-rangeslider/css/ion.rangeSlider.skinNice.css'])
        .pipe(stylus({
            use: nib(),
            compress: true
        })).pipe(concat('style.css'))

        .on('error', console.log) // Выводим ошибки в консоль
        .pipe(gulp.dest('./css')); // Выводим сгенерированные CSS-файлы в ту же папку по тем же именем, но с другим расширением
});

// Собираем JS
gulp.task('js', function() {
    gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/ion-rangeslider/js/ion.rangeSlider.min.js', './assets/js/**/*.js', '!./assets/js/vendor/**/*.js'])
        .pipe(concat('bundle.js')) // Собираем все JS, кроме тех которые находятся в ./assets/js/vendor/**
        .pipe(gulp.dest('./js'));
});


// Копируем и минимизируем изображения

gulp.task('images', function() {
    gulp.src('./assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./images'));

});


// Запуск сервера разработки gulp watch
gulp.task('watch', function() {
    // Предварительная сборка проекта
        gulp.run('stylus');
        gulp.run('images');
        gulp.run('js');
    gulp.watch('./assets/stylus/**/*.styl', ['stylus']);
    gulp.watch('./assets/js/**/*.js', ['js']);
    gulp.watch('./assets/images/**/*', ['images']);
});

gulp.task('default', function () {
    gulp.run('watch');
});

gulp.task('build', function() {
    // css
    gulp.src('./assets/stylus/style.styl')
        .pipe(stylus({
            use: ['nib']
        })) // собираем stylus
        .pipe(myth()) // добавляем префиксы - http://www.myth.io/
        .pipe(csso()) // минимизируем css
        .pipe(gulp.dest('./build/css/')) // записываем css

    // js
    gulp.src(['./assets/js/**/*.js', '!./assets/js/vendor/**/*.js'])
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));

    // image
    gulp.src('./assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))

});
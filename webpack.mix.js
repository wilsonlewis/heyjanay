const path = require('path');
const { mix } = require('laravel-mix');
const MixFile = require('laravel-mix/src/File');

mix.js(
    'resources/assets/js/main.js',
    'js'
);

mix.sass(
    'resources/assets/sass/main.sass',
    'css/settings.css.lens'
);

mix.then(() => {
    let file = new MixFile('css/settings.css.lens');
    file.write(file.read().replace(/\'/g, ''));
});
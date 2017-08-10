'use strict';

var elixir = require('laravel-elixir');

// Elixir Configurations
elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';

var bowerPath = './bower_components';

elixir(function(mix) {

  // Sample Vendor File
  // mix.copy(`./jquery/dist/jquery.min.js`, 'src/js/vendor/jquery.js');
  mix.copy('./node_modules/font-awesome/scss', 'src/sass/vendor/font-aweseome');
  mix.copy('..node_modules/font-aweseome/fonts',  'dist/fonts');

  // mix.scripts([
  //   'vendor/jquery.js',
  //   'vendor/bxslider-4.js',
  //   'metaphor.js'
  // ],'dist/js/metaphor.js');

  mix.sass('app.scss');

});
var express = require('express');
var fs = require('fs');
var secrets = require('./config/secrets');
var webpack = require('webpack');
var app = express();

// Bootstrap models
fs.readdirSync(__dirname + '/models').forEach(function(file) {
  if(~file.indexOf('.js')) require(__dirname + '/models/' + file);
});

var isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  var config = require('../webpack/webpack.config.dev-client.js');
  var compiler = webpack(config);
  
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// Bootstrap application settings
require('./config/express')(app);

// Bootstrap routes
require('./config/routes')(app);

app.listen(app.get('port'));

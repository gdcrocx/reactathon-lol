var config  = require('./config');
var app     = require('./app');

var api_url = config.get('service.url');
var api_port = config.get('service.port');
var db_url = config.get('db.host');
var db_port = config.get('db.port');

var server = app.listen(api_port, function () {

  console.log("DAL API Server listening at http://%s:%s", api_url, api_port);
  console.log("DAL DB Server listening at %s:%s", db_url, db_port);
  
  server.timeout = 300000;

});

// var server = app.listen(process.env.PORT, function () {

//   console.log("DAL API Server listening at http://%s:%s", api_url, process.env.PORT);
//   console.log("DAL DB Server listening at %s:%s", db_url, db_port);

//   server.timeout = 300000;

// });
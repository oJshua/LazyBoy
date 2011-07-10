var db_connection = require('../lib/connection.js'),
    cradle = require('cradle');

require('Jody').configure.beforeAll(function (done) {
      var db = new(cradle.Connection)().database('lazyboy_tests');
      
      //require('../lib/logger').setLogLevel(7);
    
      db.destroy(function (err) {  
        if (err) {
          console.log("error on delete db");
          throw err;
        }
        db.create();
        db_connection.create_connection('lazyboy_tests');
        done();   
      });
});






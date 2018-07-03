var MongoClient = require('mongodb').MongoClient,
    config = require('../config');

var db_url = config.get('db.protocol') + '://' + config.get('db.host') + ':'+ config.get('db.port')
var db_database = config.get('db.database')
var default_db_collection = "login"

exports.getLoginVerified = function (req, res) {
    console.log("Data : " + req.params.user_id + " " + req.params.user_pass);
    //console.log("Data : " + JSON.stringify(req)); 
    var mode = 0;
    try {
        var user_id = req.params.user_id;
        console.log("User ID : " + user_id);
        if (isNaN(user_id)) {
            mode = 1;
        }
        else if (user_id / 1) {
            mode = 2;
        }
    }
    catch (err) {
        console.log("Invalid: Login mode not supported!");
    }
    pool.getConnection(function (err, connection) {
        if (err) {
            if (connection) {
                connection.release();
            }
            // var error = { "code": 503, "status": "Error creating connection to database.. " + err };
            // return res(null, error.status);
            console.log("Error : " + err);
            return;
        }
        console.log('\nConnected as Thread Id: ' + connection.threadId);

        console.log('Attempting to verify login : ' + mode + " " + req.params.user_id + " " + req.params.user_pass);

        connection.query("CALL spGetLoginVerified(" + connection.escape(mode) + "," + connection.escape(req.params.user_id) + "," + connection.escape(req.params.user_pass) + ");", function (err, rows) {
            connection.release();
            if (!err) {
                var response = JSON.stringify(rows[0]);
                return res(null, response);
            }
        });

        connection.on('error', function (err) {
            var error = { "code": 503, "status": "Error creating connection to database.. " + err };
            return res(null, error.status);
        });
    });
};
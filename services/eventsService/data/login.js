var MongoClient = require('mongodb').MongoClient,
    config = require('../config');

var db_url = config.get('db.protocol') + '://' + config.get('db.host') + ':'+ config.get('db.port')
var db_database = config.get('db.database')
var default_db_collection = "login"

exports.getLoginVerified = function (req, res) {
    console.log("Data : " + req.params.userEmpId + " " + req.params.userPassword);
    //console.log("Data : " + JSON.stringify(req)); 
    var mode = 0;
    try {
        var userEmpId = req.params.userEmpId;
        console.log("User ID : " + userEmpId);
        if (isNaN(userEmpId)) {
            mode = 1;
        }
        else if (userEmpId / 1) {
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

        console.log('Attempting to verify login : ' + mode + " " + req.params.userEmpId + " " + req.params.userPassword);

        connection.query("CALL spGetLoginVerified(" + connection.escape(mode) + "," + connection.escape(req.params.userEmpId) + "," + connection.escape(req.params.userPassword) + ");", function (err, rows) {
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
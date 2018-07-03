var MongoClient = require('mongodb').MongoClient,
    config = require('../config');

var db_url = config.get('db.protocol') + '://' + config.get('db.host') + ':'+ config.get('db.port')
var db_database = config.get('db.database')
var default_db_collection = "events"

exports.addEvent = function (req, res) {
    MongoClient.connect(db_url,{ useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);

        db.collection(default_db_collection).find().toArray(function (findErr, result) {
            if (findErr) throw findErr;
            console.log(result);
            client.close();
        });
    }); 
};

exports.deleteLocation = function (req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            res.json({ "code": 503, "status": "Error connecting to database.. :(" });
            return;
        }
        console.log('\nConnected as Thread Id: ' + connection.threadId);

        console.log('Attempting to delete location : ' + req.params.locationid + " " + req.params.uid + " " + req.params.upass);

        connection.query("CALL spDeleteLocationDetails(" + connection.escape(req.params.locationid) + "," + connection.escape(req.params.uid) + "," + connection.escape(req.params.upass) + ");", function (err, rows) {
            connection.release();
            if (!err) {
                var response = JSON.stringify(rows[0]);
                return res(null, response);
            }
        });

        connection.on('error', function (err) {
            var error = { "code": 503, "status": "Error connecting to database.. :(" };
            return error;
        });
    });
};

exports.updateLocation = function (req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            res.json({ "code": 503, "status": "Error connecting to database.. :(" });
            return;
        }
        console.log('\nConnected as Thread Id: ' + connection.threadId);

        console.log('Attempting to update location : ' + req.params.locationid + " " + req.params.loc_address + " " + req.params.loc_area + " " + req.params.loc_landmark + " " + req.params.loc_city);

        connection.query("CALL spUpdateLocationDetails(" + connection.escape(req.params.locationid) + "," + connection.escape(req.params.loc_address) + "," + connection.escape(req.params.loc_area) + "," + connection.escape(req.params.loc_landmark) + "," + connection.escape(req.params.loc_city) + ");", function (err, rows) {
            connection.release();
            if (!err) {
                var response = JSON.stringify(rows[0]);
                return res(null, response);
            }
        });

        connection.on('error', function (err) {
            var error = { "code": 503, "status": "Error connecting to database.. :(" };
            return error;
        });
    });
};

exports.getLocationById = function (req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            res.json({ "code": 503, "status": "Error connecting to database.. :(" });
            return;
        }
        console.log('\nConnected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get location info : ' + req.params.locationid);

        connection.query("CALL spGetLocationById(" + connection.escape(req.params.locationid) + ");", function (err, rows) {
            connection.release();
            if (!err) {
                var response = JSON.stringify(rows[0]);
                return res(null, response);
            }
        });

        connection.on('error', function (err) {
            var error = { "code": 503, "status": "Error connecting to database.. :(" };
            return error;
        });
    });
};

exports.getAllLocationsByLatLngRad = function (req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            res.json({ "code": 503, "status": "Error connecting to database.. :(" });
            return;
        }
        console.log('\nConnected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get location info : ' +  + req.params.centreLat + " " + req.params.centreLng + " " + req.params.boundingRadius);

        connection.query("CALL spGetAllLocationsByLatLngRad(" + connection.escape(req.params.centreLat) + ", " + connection.escape(req.params.centreLng) + ", " + connection.escape(req.params.boundingRadius) + ");", function(err, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(rows[0]); 
                return res(null,response); 
            }
        });

        // connection.query("select location_lat, location_lng from location;", function (err, rows) {
        //     connection.release();
        //     if (!err) {
        //         var response = JSON.stringify(rows[0]);
        //         return res(null, response);
        //     }
        // });

        connection.on('error', function (err) {
            var error = { "code": 503, "status": "Error connecting to database.. :(" };
            return error;
        });
    });
};

exports.getAllEvents = function (req, res) {    
    MongoClient.connect(db_url, { useNewUrlParser: true }, function (err, client) {
        if (err) throw err;

        var db = client.db(db_database);

        db.collection(default_db_collection).find().toArray(function (findErr, result) {
            if (findErr) throw findErr;
            console.log(result);
            client.close();
        });
    }); 
};

exports.getCoveredLocations = function (req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            res.json({ "code": 503, "status": "Error connecting to database.. :(" });
            return;
        }
        console.log('\nConnected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get location info : Covered Locations');

        connection.query("SELECT location_area, location_city FROM `location` limit 3;", function(err, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(rows); 
                return res(null,response); 
            }
        });

        connection.on('error', function (err) {
            var error = { "code": 503, "status": "Error connecting to database.. :(" };
            return error;
        });
    });
};
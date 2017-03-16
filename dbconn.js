console.log("Test ..")
//Retieve
var mongoClient = require('mongodb').MongoClient;

// Connect to the db
mongoClient.connect("mongodb://localhost:27017/",function(err,db){
    if(!err){
        console.log("We are connecting to outerspace .... vroom..vroom..")
    }
})

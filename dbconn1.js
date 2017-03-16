var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017');

var db=mongoose.connection;


var schema =  new mongoose.Schema({
	userId:Number,
	userName:{type:String},
	password:{type:String},
	gender:{
		type:String,
		enum: ['Male','Female']
	}	
});

UserModel=mongoose.model('UserAccount',schema);

var user1=new UserModel({
	userId:1234,
	userName:"Kislay",
	password:"abc@20",
	gender:'Male'
});

var user2=new UserModel({
	userId:456,
	userName:"Shruti",
	password:"lala@20",
	gender:'Male'
});

var user3=new UserModel({
	userId:789,
	userName:"Tanvi",
	password:"lalalala@20",
	gender:'Male'
});

var user4=new UserModel({
	userId:987,
	userName:"Iva",
	password:"test@20",
	gender:'Male'
});

// user2.save(function(err,user2){
// 		if (err) {
// 			return console.error(err);
// 		}

// 		console.log(user2);
// })


// user3.save(function(err,user3){
// 		if (err) {
// 			return console.error(err);
// 		}

// 		console.log(user3);
// })


// user4.save(function(err,user4){
// 		if (err) {
// 			return console.error(err);
// 		}

// 		console.log(user4);
// })



//Find one return type is collection
// UserModel.findOne({userId:789},function(err,obj){
// 	if(err)
// 		console.log(err);
// 	console.log(obj);
// })



//Using expression language
//return type of find is an array

console.log("Testing gender not equal to Male")

UserModel.find({"gender":{$ne:'Male'}},function(err,obj){

		if (err) 
		{
			console.log(err);
		}
		console.log(obj);

})

console.log("Testing user id greater than 789")

UserModel.find({"userId":{$gt:789}},function(err,obj){
	if (err){
		console.log(err);
	}

	console.log(obj);
})

function findAll()
{
	UserModel.find(function(err,obj){
		if (err) {
			console.log(err);
		}
		//console.log(obj);

		console.log("now running for loop")

		for(var i in obj)
		{
			console.log(obj[i].userName);
			console.log(obj[i].gender);
		}
	})

}



db.once('open',function(){
	console.log("Dance .. .. ");
})

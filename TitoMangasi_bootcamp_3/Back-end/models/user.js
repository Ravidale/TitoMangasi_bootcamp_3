const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bootcamp", { useMongoClient : true });

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : String,
    username : String,
    password : String,
    terms: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;
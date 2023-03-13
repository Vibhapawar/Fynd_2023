const mongoose = require("mongoose");
const url = "mongodb://0.0.0.0:27017/socialApp";

const userSchema = new mongoose.Schema(
    {
        _id: Number,
        username: String,
        email: String,
    },
    { _id: false}
);
const User = new mongoose.model("users", userSchema); // users is collection and userSchema is used to create users
async function run(){
    try{
        await mongoose.connect(url);
        const user = User({ name: "Vibha", email: "lets@gmail.com", _id: 1});
        await user.save();
        const docs = await User.find({});
        docs.forEach((doc) => console.log(doc));    
    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.disconnect();     
    }
}
run();
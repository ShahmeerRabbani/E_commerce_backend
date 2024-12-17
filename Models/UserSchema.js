import mongoose from "mongoose";

const Schema = mongoose.Schema({
    fullname: String,
    username: String,
    email: String,
    password: String
})

const UserModel = mongoose.model('Signup', Schema);

export default UserModel
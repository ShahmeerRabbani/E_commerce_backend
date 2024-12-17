import express from 'express';
import { Store } from './data.js';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import UserModel from './Models/UserSchema.js';


dotenv.config(); 

const app = express();

//PORT
const port = process.env.PORT;

// Real link
const DBURI = process.env.MONGODB_URI; 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use('/uploads', express.static('uploads')); // Adjust 'uploads' to your image directory

mongoose.connect(DBURI)

mongoose.connection.on('connected', (res) => console.log('Mongodb Connected'))

mongoose.connection.on('error', (err) => console.log('error', err))


// Api Signup
app.post('/api/signup', async (req, res) => {

    
    const {fullname, username, email, password} = req.body

    if(!fullname || !username || !email || !password){
        res.json({
            message: 'required fields are missing',
            status: false,
        })
        return;
    }

    const hashPassword = await bcrypt.hash(password, 10)

    let userObj = {
        fullname, username, email, password : hashPassword
    }

    const response = await UserModel.create(userObj)

    res.json({
        message: 'user create successfully',
        status: true,
    })
})


// Api Login

app.post('/api/login',async (req, res) => {

    console.log(req.body)

    const {email, password} = req.body

    if(!email || !password) {
        res.json({
            message: 'required fields are missing',
            status: false
        })
        return;
    }

    const emailExists =await UserModel.findOne({email})
    console.log(emailExists)
    if(!emailExists) {
        res.json({
            message: 'Invalid email and password',
            status: false
        })
        return;
    }

    const comparePassword = await bcrypt.compare(password, emailExists.password)

    if(!comparePassword) {
        res.json({
            message: 'Invalid email and password',
            status: false
        })
        return;
    }

    res.json({
        message: 'Login successful',
        status: true,
    })
})


app.get('/images', (req, res)=>{
    res.send(Store)
})



    app.listen(port, (req, res)=>{
        console.log('server is running')
    });
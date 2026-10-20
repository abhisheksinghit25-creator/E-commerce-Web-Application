const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail');

const generateTOken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
}

//Regisater a new user

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        //Todos:Hash thew password before saving to the database
        //Todos:Implement JWT token generation for authentication
        //Todos:OTP Sending and verification for email configration implement with codex
        //TOdo:WELCOME MAIL

        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

         // 1. User create hone se pehle OTP generate karein

         const otp = Math.floor(100000 + Math.random() * 900000).toString();

          // 2. OTP expire time set karein (Maan lijiye 10 minutes baad ka time)

         const otpExpire = new Date(Date.now() + 10 * 60 * 1000);

         // 3. Ab otp aur otpExpire ko User.create me pass karein 

         const newUser = await User.create ({
            name,
            email,
            password: hashpassword,
            otp: otp,
            otpExpire: otpExpire
         });

        if (newUser) {

            const message = `
        Welcome to ShopNest,${name}! Thank you for registering With us.
        Your OTP for ShopNest registration is:${otp}`;

            await sendEmail(email, 'welcome to ShopNest - your OTP for Registration', message);

            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                token: generateTOken(newUser._id)
            });

        }
        else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({ message: 'server error' });
    }
};

// login user

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateTOken(user._id)
            });
        } else {
            res.status(400).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// verify Email using OTP

const verifyEmail = async (req,res) =>{
    const { email, otp } = req.body;

try{
    const user = await User.findOne({email});

    if(!user) {
        return res.status(404).json({message: 'User not found'});
    }
    if(user.verified) {
        return res.status(400).json({message:'User is already verified'});
    }

    // Check karte hain ki OTP sahi hai aur expire to nahi hua

    if(user.otp === otp && user.otpExpire > Date.now()) {
        user.verified = true;
        user.otp = null;
        user.otpExpire = null;
        await user.save();

        res.json({message: 'Email Verified Successfully! you can now login.'});

    } else {
        res.status(400).json({message:'Invalid or expired Otp'});
    }

    } catch(error) {
        res.status(500).json({message: 'Server error'});
    }
    
};


module.exports = { registerUser, loginUser, getUsers, verifyEmail };
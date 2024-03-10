const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');




const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    const userAvailable = await User.findOne({email}) 
    if (userAvailable) {
        res.status(400);
        throw new Error('User already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(`Hashed Password ${hashedPassword}`);
    const user = await User.Create({
        username,
        email,
        password: hashedPassword,
    })
    // console.log(`User created ${user}`);
    // if(user){
    //     res.status(201).json({_id: user.id, email: user.email,})
    // }else{
    //     res.status(400)
    //     throw new Error('Invalid user data')
    // }
    res.json({message: 'User Creates Successfully'});
})





const loginUser = asyncHandler(async  (req, res) => {
    res.json({message: 'Login  user '});
})



const currentUser = asyncHandler(async  (req, res) => {
    res.json({message: 'Current  user info '});
})

module.exports = { registerUser, loginUser, currentUser,}
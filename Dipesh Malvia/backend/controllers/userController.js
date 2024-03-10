const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async (req, res) => {
    res.json({message: 'Register the user '});
})



const loginUser = asyncHandler(async  (req, res) => {
    res.json({message: 'Login  user '});
})



const currentUser = asyncHandler(async  (req, res) => {
    res.json({message: 'Current  user info '});
})

module.exports = { registerUser, loginUser, currentUser,}
const asyncHandler = require('express-async-handler');


const getContacts = asyncHandler(async (req, res) => {
    res.send('Get all contacts');
})



const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All fields must be filled');
    }
    res.send('Create new contact');
})



const getContact = asyncHandler(async (req, res) => {
    res.send(`get contact for ${req.params.id}`);
})



const updateContact = asyncHandler(async (req, res) => {
    res.send(`update contact for ${req.params.id}`);
})


const deleteContact = asyncHandler(async (req, res) => {
    res.send(`Delete contact for ${req.params.id}`);
})



module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };
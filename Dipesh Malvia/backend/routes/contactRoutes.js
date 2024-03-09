const express = require('express');
const router = express.Router();
const { getContact } = require("../controllers/contactController.js");

router.get('/', getContact)

router.post('/', (req, res) => {
    res.send('Create new contact');
})


router.get('/:id', (req, res) => {
    res.send(`get contact for ${req.params.id}`);
})


router.put('/:id', (req, res) => {
    res.send(`update contact for ${req.params.id}`);
})


router.delete('/:id', (req, res) => {
    res.send(`Delete contact for ${req.params.id}`);
})

module.exports = router;
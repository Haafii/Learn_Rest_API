const express = require('express');
const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        res.send('Hello from aliens')
    }
    catch{
        res.send('Error ' + err)
    }
});


module.exports = router
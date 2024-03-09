const express = require("express");
const dotenv = require("dotenv").config();



const app = express();
const port = process.env.PORT || 9001;

const contactRouter = require('./routes/contactRoutes.js')
app.use('/api/contacts',contactRouter)


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})
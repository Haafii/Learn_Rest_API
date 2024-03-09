const express = require("express");
const dotenv = require("dotenv").config();
const contactRouter = require('./routes/contactRoutes.js');
const errorHandler = require("./middleware/errorHandler.js");


const app = express();
const port = process.env.PORT || 9001;


app.use(express.json());
app.use('/api/contacts',contactRouter)
app.use(errorHandler)


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})
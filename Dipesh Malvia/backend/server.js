const express = require("express");
const dotenv = require("dotenv").config();
const contactRouter = require('./routes/contactRoutes.js');
const userRoute = require('./routes/userRoutes.js');
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/dbConnection.js");
connectDb();

const app = express();
const port = process.env.PORT || 9001;


app.use(express.json());
app.use('/api/contacts',contactRouter)
app.use('/api/users',userRoute)
app.use(errorHandler)


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})
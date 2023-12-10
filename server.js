const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();
//Rest Object

const app = express();


// middleWares
app.use(express.json());
app.use(morgan('dev'));


// routers
app.get('/',(req,res)=>{
    res.status(200).send({
        message:"Server Running",
    });
});
const port = process.env.PORT||8080;

app.listen(port , ()=>{
    console.log(`Server Running AT ${process.env.NODE_MODE} Mode on port ${process.env.PORT}` .bgCyan.white)
})






















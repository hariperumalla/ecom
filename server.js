const express = require("express");
require("dotenv").config();
const config = require("./configs/db.config");






const app = express();

const db=require("./models/");


db.sequelize.sync({force:true})
.then(()=>{
    console.log("DB Synced Successfully");
})


app.listen(process.env.PORT,()=>{

    console.log("App is running on port number 8000");
})
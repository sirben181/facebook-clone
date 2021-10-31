const express=require('express');
const dotenv=require('dotenv');
const path=require('path')

dotenv.config({path:'./config/config.env'});

const PORT=process.env.PORT || 5000


const app=express();


//adding static folder
app.use(express.static('public'));

app.listen(PORT,()=>{
    console.log(` Server running on port ${PORT}`)
})
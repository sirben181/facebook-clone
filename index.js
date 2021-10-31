const express=require('express');
const dotenv=require('dotenv');

const app=express();

const PORT=process.env.PORT || 5000
//adding static folder
app.use(express.static('public'));

app.listen(PORT,()=>{
    console.log(` Server running on port ${PORT}`)
})
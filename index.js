const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const openairoute = require('./routes/openairoutes')
const app = express();

app.use('/openai', openairoute);

app.get('/', (req, res)=>{
    res.end("Home Page");
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
})
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

mongoose.connect(
    'mongodb+srv://pgor1221:49insea30@cluster0.zrlhx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
})

await.listen(3001, ()=> {
    console.log('Server running on port 3001.')
})
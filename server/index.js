const express = require('express')
const app = express()
app.use(express.json());
app.get('/api/', (req, res)=>{
    console.log("here");
    if (err) return res.status(400).send(err);
    return res.status(200).json({success: true, msg: "Hello world!"});
})

app.listen(1337, ()=>{
    console.log("Server started at 1337")
})

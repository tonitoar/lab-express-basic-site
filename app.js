const express = require('express')
const app = express()

app.use(express.static("public"))

app.get('/Home',(req, res) => {
    res.sendFile(__dirname+"/views/Home.html");
})
app.get('/About',(req, res) => {
    res.sendFile(__dirname+"/views/About.html");
})
app.get('/Works',(req, res) => {
    res.sendFile(__dirname+"/views/Works.html");
})
app.get('/Gallery',(req, res) => {
    res.sendFile(__dirname+"/views/Gallery.html");
})


app.post('/', function(req, res) {
    res.send('post response')
})

app.get('/Error404',(req, res) => {
    res.sendFile(__dirname+"/views/Error404.html");
})

// app.get("*")

app.listen(3000)
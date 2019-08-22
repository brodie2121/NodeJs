
const express = require('express')
const app = express()
const PORT = 3000

app.get('/',(req,res) => {
  res.send("Hello Express!")
})

app.get('/movies/comedy/year/1992',(req,res) => {
  res.send("Comedy Movies")
})

app.get('/movies/romance',(req,res) => {
  res.send("Romance Movies")
})

app.get('/movies/action',(req,res) => {
  res.send("Action Movies")
})

app.listen(PORT,() => {
  console.log("Server is running on PORT " + PORT)
})

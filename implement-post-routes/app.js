
const express = require('express')
const app = express()
const PORT = 3000

app.get('/movies',(req,res) => {
  res.send("Movies")
})

app.post('/movies',(req,res) => {
  let title = req.body.title
  let year = req.body.year
  console.log(title)
  console.log(year)
  res.send("OK")
})


app.listen(PORT,() => {
  console.log("Server is running on PORT " + PORT)
})

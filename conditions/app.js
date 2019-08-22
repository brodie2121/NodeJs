
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

app.get('/users',(req,res) => {

  let users =
      [
        {name: "John Doe", age: 34},
        {name: "Mary Doe", age: 32},
        {name: "Alex Lowe",age: 27}
      ]

    users = [] 
    res.render('users',{users: users})

})

app.get('/',(req,res) => {

  let user = {
            name: "John Doe",
            address: {
              street: "789 Street",
              city: "Houston",
              state: "TX"
            }

          }

  res.render('index',user)

})

app.listen(3004,() => {
  console.log("Server is running...")
})

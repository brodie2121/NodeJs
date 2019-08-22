
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

app.get('/',(req,res) => {

  let user = {
            name: "Brodie Brock",
            address: {
              street: "789 Street",
              city: "Houston",
              state: "TX"
            }

          }

  res.render('index',user)

})

app.listen(3001,() => {
  console.log("Server is running...")
})

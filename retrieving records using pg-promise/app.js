
const pgp = require('pg-promise')()
const connectionString = "postgres://localhost:5432/nailasgarden"
const db = pgp(connectionString)

db.any('SELECT name, course, price, imageURL FROM dishes WHERE price > 1;',[8])
.then((dishes) =>{
  console.log(dishes)
}).catch(error => console.log(error))

/*
db.none('INSERT INTO dishes(name,course,price,imageURL) VALUES($1,$2,$3,$4)',['Chicken Sandwich','Entrees',6.50,'chickensandwich.png'])
.then((data) => {
  console.log("SUCCESS")
}).catch(error => console.log(error)) */


/*db.one('INSERT INTO dishes(name,course,price,imageURL) VALUES($1,$2,$3,$4) RETURNING dishid',['Little Burger','Starters',4.50,'burger.png'])
.then((data) => {
  console.log(data.dishid)
}).catch(error => console.log(error))*/

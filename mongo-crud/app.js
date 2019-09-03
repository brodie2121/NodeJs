const mongoose = require("mongoose");
const Book = require("./models/book");

mongoose.set("useFindAndModify", false);

mongoose.connect(
  "mongodb://localhost:27017/hello-mongo",
  {
    useNewUrlParser: true
  },
  error => {
    if (error) {
      console.log("Unable to connect to database");
    } else {
      console.log("Connected to the database");
    }
  }
);

Book.findOneAndDelete({ _id: "5d6eb93c39018f4dbd26dccf" }, (error, result) => {
  console.log(result);
});

/*
const updatedDoc = {
  title: "introduction to Node101",
  author: "Bill Nye"
};
Book.findOneAndUpdate(
  { _id: "5d6eb93c39018f4dbd26dccf" },
  updatedDoc,
  (error, result) => {
    console.log(result);
  }
);
*/

/*
Book.find({}, (error, books) => {
  console.log(books);
});*/

/*
Book.findById("5d6eb93c39018f4dbd26dccf", (error, book) => {
  console.log(book);
});
*/
/*
Book.findOne({ _id: "5d6eb93c39018f4dbd26dccf" }, (error, book) => {
  console.log(book);
});
*/

/*
const book = new Book({
  title: "Introduction to Js",
  isbn: "rftgyh67",
  author: "Brock"
});

book.save((error, newBook) => {
  if (error) {
    console, log(error);
  } else {
    console.log(newBook);
  }
});*/

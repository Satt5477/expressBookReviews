const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  res.send(JSON.stringify(books,null,4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
    res.send(books[isbn]);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here    
  const authorparam = req.params.author;
  const filteredBooks = Object.values(books).filter(book => book.author === authorparam);
    res.send(filteredBooks);  
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  const titleparam = req.params.title;
  const filteredBooks = Object.values(books).filter(book => book.title === titleparam);
    res.send(filteredBooks);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
    res.send(books[isbn]);
});

module.exports.general = public_users;

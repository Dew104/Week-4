const express = require('express')
const app = express();


// 1
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'James Willson', email: 'james@example.com' },
    { id: 3, name: 'Jenny Car', email: 'jenny@example.com' },
    { id: 4, name: 'Peter G', email: 'peter@example.com' },
    { id: 5, name: 'Glenn Q', email: 'glenn@example.com' },
    { id: 6, name: 'Joe S', email: 'joe@example.com' },
    { id: 7, name: 'Homer S', email: 'homer@example.com' },
    { id: 8, name: 'Bart S', email: 'bart@example.com' },
    { id: 9, name: 'Guest', email: 'guest@example.com' },
    { id: 10, name: 'Jane Smith', email: 'jane@example.com' },
    ]

//2

app.get('/users/:id', (req, res) => {
    let l;
    if (undefined == users.find((users) => users.id == req.params.id )) {
        l = {massage: "User not found"}
    } else {
    l = (users.find((users) => users.id == req.params.id))
    }
    res.json(l)
  })

  //3

  let products = [
    { id: 101, name: 'Laptop', price: 25000 },
    { id: 102, name: 'Speaker', price: 4000 },
    { id: 103, name: 'Tablet', price: 12000 },
    { id: 104, name: 'Headphones', price: 3000 },
    { id: 105, name: 'Smartwatch', price: 5000 },
    { id: 106, name: 'Camera', price: 20000 },
    { id: 107, name: 'Monitor', price: 10000 },
    { id: 108, name: 'Keyboard', price: 1500 },
    { id: 109, name: 'Mouse', price: 800 },
    { id: 110, name: 'Smartphone', price: 15000 },
];
app.get('/products/', (req, res) => {
    res.send(products)
})

 //4
app.get('/products/:id', (req, res) => {
    let p;
    if (undefined == products.find((item) => item.id === Number(req.params.id))) {
      p = { message: "Products not found" }
    } else {
      p = products.find((item) => item.id == Number(req.params.id))
    }
    res.json(p);
  })

//5

let news = [
  { id: 1, title: 'Tech Innovation', category: 'Technology' },
  { id: 2, title: 'AI Advances', category: 'Technology' },
  { id: 3, title: 'Global Economy Updates', category: 'Business' },
  { id: 4, title: 'Stock Market Trends', category: 'Business' },
  { id: 5, title: 'Healthy Living Tips', category: 'Health' },
  { id: 6, title: 'Mental Health Awareness', category: 'Health' },
  { id: 7, title: 'Sports Highlights', category: 'Sports' },
  { id: 8, title: 'Football World Cup News', category: 'Sports' },
  { id: 9, title: 'Travel Destinations for 2025', category: 'Travel' },
  { id: 10, title: 'Health Tips', category: 'Health' },
];

app.get('/news/', (req, res) => {
  res.send(news)
}) 

// 6

app.get('/news/:category', (req, res) => {
  const filteredNews = news.filter((item) => item.category === req.params.category); 

  if (filteredNews.length === 0) {
      res.status(404).json({ message: "No news found in this category" }); 
  } else {
      res.json(filteredNews); 
  }
});

app.listen(3000, () => console.log('Server is running port 3000'))
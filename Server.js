const express = require('express')
const app = express();


// 1
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@another.com' },
  { id: 3, name: 'Mike Brown', email: 'mike@example.com' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com' },
  { id: 5, name: 'Sarah Wilson', email: 'sarah@another.com' },
  { id: 6, name: 'James Taylor', email: 'james@example.com' },
  { id: 7, name: 'Robert Moore', email: 'robert@another.com' },
  { id: 8, name: 'Laura Johnson', email: 'laura@example.com' },
  { id: 9, name: 'Kevin Lee', email: 'kevin@another.com' },
  { id: 10, name: 'Sophia Walker', email: 'sophia@example.com' },
]
    app.get('/users/', (req, res) => {
      res.send(users)
    })
//2

// app.get('/users/:id', (req, res) => {
//     let l;
//     if (undefined == users.find((users) => users.id == req.params.id )) {
//         l = {massage: "User not found"}
//     } else {
//     l = (users.find((users) => users.id == req.params.id))
//     }
//     res.json(l)
//   })

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
// app.get('/products/:id', (req, res) => {
//     let p;
//     if (undefined == products.find((item) => item.id === Number(req.params.id))) {
//       p = { message: "Products not found" }
//     } else {
//       p = products.find((item) => item.id == Number(req.params.id))
//     }
//     res.json(p);
//   })

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

//7 

const events = [
  { id: 1, name: 'Tech Conference', location: 'Bangkok', date: '2025-02-15' },
  { id: 2, name: 'Art Exhibition', location: 'Chiang Mai', date: '2025-03-10' },
  { id: 3, name: 'Music Festival', location: 'Bangkok', date: '2025-02-20' },
  { id: 4, name: 'Startup Workshop', location: 'Phuket', date: '2025-04-05' },
  { id: 5, name: 'Gaming Expo', location: 'Bangkok', date: '2025-05-18' },
  { id: 6, name: 'Cultural Fair', location: 'Chiang Mai', date: '2025-06-25' },
  { id: 7, name: 'Food Festival', location: 'Pattaya', date: '2025-07-10' },
  { id: 8, name: 'Marathon Event', location: 'Bangkok', date: '2025-08-20' },
  { id: 9, name: 'Book Fair', location: 'Bangkok', date: '2025-09-15' },
  { id: 10, name: 'Photography Workshop', location: 'Phuket', date: '2025-10-05' }
];
app.get('/events/', (req, res) => {
  res.send(events)
}) 


//8

// app.get('/events/:id', (req, res) => {
//   let e;
//   if (undefined == events.find((events) => events.id === Number(req.params.id))) {
//     e = { message: "Event not found" }
//   } else {
//     e = events.find((events) => events.id == Number(req.params.id))
//   }
//   res.json(e);
// })

//9

app.get('/users/filter', (req, res) => {
  const domain = req.query.domain; 
  if (!domain) {
      return res.status(400).json({ message: "Please provide a domain query parameter" });
  }

  const filteredUsers = users.filter(user => user.email.endsWith(`@${domain}`));

  if (filteredUsers.length === 0) {
      res.status(404).json({ message: "No users found with this domain" });
  } else {
      res.json(filteredUsers);
  }
});

// 10

app.get('/products/searchByName', (req, res) => {
  const query = req.query.name; 
  if (!query) {
      return res.status(400).json({ message: "Please provide a name query parameter" });
  }

  const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredProducts.length === 0) {
      res.status(404).json({ message: "No products found with the given name" });
  } else {
      res.json(filteredProducts);
  }
});

// 11

app.get('/products/search', (req, res) => {
  const { name, minPrice, maxPrice } = req.query; 

  let filteredProducts = products;

  if (name) {
      filteredProducts = filteredProducts.filter(product =>
          product.name.toLowerCase().includes(name.toLowerCase())
      );
  }

  if (minPrice) {
      filteredProducts = filteredProducts.filter(product => product.price >= Number(minPrice));
  }
  if (maxPrice) {
      filteredProducts = filteredProducts.filter(product => product.price <= Number(maxPrice));
  }

  if (filteredProducts.length === 0) {
      res.status(404).json({ message: "No products found with the given criteria" });
  } else {
      res.json(filteredProducts);
  }
});

// 12

app.get('/events/search', (req, res) => {
  const { location, startDate, endDate } = req.query;

  if (!location || !startDate || !endDate) {
      return res.status(400).json({ message: "Please provide location, startDate, and endDate" });
  }

  const filteredEvents = events.filter(event => 
      event.location.toLowerCase() === location.toLowerCase() &&
      new Date(event.date) >= new Date(startDate) &&
      new Date(event.date) <= new Date(endDate)
  );

  if (filteredEvents.length === 0) {
      res.status(404).json({ message: "No events found matching the criteria" });
  } else {
      res.json(filteredEvents);
  }
});
app.listen(3001, () => console.log('Server is running port 3001'))
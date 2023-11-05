const express = require('express')
const dotenv = require('dotenv')
dotenv.config()


let jsonData={
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com",
    "isStudent": false,
    "hobbies": ["reading", "hiking", "cooking"],
    "address": {
      "street": "123 Main St",
      "city": "Exampleville",
      "state": "CA",
      "zipCode": "12345"
    }
  }
  
const app = express()
const port = process.env.PORT

console.log(port);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('Hello login!')
})
app.get('/json', (req, res) => {
  res.json(jsonData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
let jsonData = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
  isStudent: false,
  hobbies: ["reading", "hiking", "cooking"],
  address: {
    street: "123 Main St",
    city: "Exampleville",
    state: "CA",
    zipCode: "12345",
  },
};

let jokesdata=[
    {
      "id": 1,
      "category": "General",
      "text": "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      "id": 2,
      "category": "Dad Jokes",
      "text": "Did you hear about the kidnapping at the playground? They woke up!"
    },
    {
      "id": 3,
      "category": "Pun",
      "text": "I'm reading a book on anti-gravity. It's impossible to put down!"
    },
    {
      "id": 4,
      "category": "Knock-Knock",
      "text": "Knock, knock. Who's there? Lettuce. Lettuce who? Lettuce in, it's cold out here!"
    }
  ]

import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const port = process.env.PORT;

app.get("/login", (req, res) => {
  res.send("Hello login!");
});
app.get("/sample", (req, res) => {
  res.json(jsonData);
});
app.get("/api/jokes", (req, res) => {
  res.json(jokesdata);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

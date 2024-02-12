const express = require('express');
const app = express();
const port = 3000;
const data = require("./data.json");
const cors = require("cors");

app.use(cors());

const budget = {
  myBudget: [
  {
    "title": "Eat out",
    "budget": 30
  },
  {
    "title": "Rent",
    "budget": 300  
  },
  {
    "title": "Groceries",
    "budget": 90  
  },
  {
      "title": "Insurance",
      "budget": 50
  },
  {
      "title": "Utilities",
      "budget": 65
  },
  {
      "title": "Electricity",
      "budget": 120
  },
  {
      "title": "others",
      "budget": 50
  }
]
};
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});
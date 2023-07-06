require('dotenv').config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
// Mount on API

app.get('/', (req, res) => {
  res.send('Hello 🎉 \n Append /api/students for students or \n /api/campuses for campuses')
})

app.use("/api", require("./api"));
console.log("here in index.js");

// Syncing DB Function
const syncDB = () => db.sync({ /*force: true*/ }).then(()=>{console.log("Drop and resync DB")});

// Run server function
const serverRun = () => {
    
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

syncDB();
serverRun();

module.exports = app;
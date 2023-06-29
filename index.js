const express = require("express");
const db = require("./db");
const PORT = "8127";

const app = express();

// Mount on API
app.use("/api", require("./api"));
console.log("here in index.js");

// Syncing DB Function
const syncDB = () => db.sync({ force: true }).then(()=>{console.log("Drop and resync DB")});

// Run server function
const serverRun = () => {
    
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

syncDB();
serverRun();

module.exports = app;
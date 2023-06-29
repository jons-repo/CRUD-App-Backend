const { Sequelize } = require("sequelize");
const { name } = require("../package.json");
//name === campusesData
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
const db = new Sequelize(`postgres://postgres:roman123@localhost:5432/${name}`, {
  logging: false,
});

module.exports = db;

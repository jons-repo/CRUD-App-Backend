const { Sequelize } = require("sequelize");
const { name } = require("../package.json");
//name === campusesData
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
// knd = `postgres://knd:2782001knd@localhost:5433/${name}`
const db = new Sequelize(process.env.POSTGRES_URL_NON_POOLING + "?sslmode=require" , {
  logging: false,
});

module.exports = db;

const { Sequelize } = require("sequelize");
const { name } = require("../package.json");
//name === campusesData
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
// knd = `postgres://knd:2782001knd@localhost:5433/${name}`
// postgres://postgres:roman123@localhost:5432/${name}
const db = new Sequelize(`postgres://default:XAnoxSlt0H4u@ep-delicate-sunset-041979.us-east-1.postgres.vercel-storage.com:5432/verceldb` + "?sslmode=require" , {
  logging: false,
});

module.exports = db;

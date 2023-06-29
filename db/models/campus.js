const { DataTypes } = require("sequelize");
const db = require("../db");

const Campuses = db.define("campus", {
    /*
    company: {
    type: DataTypes.STRING,
    allownull: false,
  },
    */
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    imageUrl:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
   
});

module.exports = Campuses;
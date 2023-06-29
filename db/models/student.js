/*
    company: {
    type: DataTypes.STRING,
    allownull: false,
  },
    */

const { DataTypes } = require("sequelize");
const db = require ("../db");

const Students = db.define("students", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    gpa: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0.0,
            max: 4.0
        }
    }
});

module.exports = Students;

const express = require("express");
const router = express.Router();
const { Student } = require("../db/models");

// Root here is localhost:8080/api/students/

router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Student.findAll();

    allStudents
      ? res.status(200).json(allStudents) // if allStudents is truthy
      : res.status(404).send("Students List Not Found"); // if allStudents is falsey
  } catch (error) {
    next(error);
  }
});

module.exports = router;
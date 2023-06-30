const express = require("express");
const router = express.Router();
const { Student, Campus } = require("../db/models");

// Root here is localhost:8080/api/students/

//get all student
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

router.get("/:id", async (req, res, next) => {
  const studentId = req.params.id;

  try {
    const singleStudent = await Student.findByPk(studentId, {
      include: Campus, //include the associated campus model to get access to data?
    });

    singleStudent
      ? res.status(200).json(singleStudent) 
      : res.status(404).send("Student Data Not Found")
  } catch (error) {

  }
});

module.exports = router;
const express = require("express");
const router = express.Router();
const { Student, Campus } = require("../db/models");

// Root here is localhost:8080/api/students/

//get all student
router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Student.findAll({include: Campus});

    allStudents
      ? res.status(200).json(allStudents) // if allStudents is truthy
      : res.status(404).send("Students List Not Found"); // if allStudents is falsey
  } catch (error) {
    next(error);
  }
});

//handling id request > single student
router.get("/:id", async (req, res, next) => {
  const studentId = req.params.id;

  try {
    const singleStudent = await Student.findByPk(studentId, {
      include: Campus, //include the associated campus model to get access to data
    });

    singleStudent
      ? res.status(200).json(singleStudent) 
      : res.status(404).send("Student Data Not Found")
  } catch (error) {
    next(error);
  }
});

router.post("/addStudent", async (req, res, next) => {
  //handled empty req body
  //handled gpa over and under value
  try {
    if (!req.body) {
      throw new Error ("Empty request body")
    } 

    const { gpa } = req.body;

    if (gpa < 0.0 || gpa > 4.0) {
      throw new Error ("Invalid GPA, GPA should be between 0.0 and 4.0");
    }

    const createStudent = await Student.create(req.body);
    res.send(createStudent);

  } catch (error) {
    return res.status(400).send(error.message);
  }
 
});

module.exports = router;
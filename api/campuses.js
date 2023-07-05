const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../db/models");

// Root here is localhost:8080/api/campuses/

//handling all campuses request 
router.get("/", async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll( {include: Student} );
    console.log(allCampuses);
    allCampuses
      ? res.status(200).json(allCampuses) // if allCampuses is truthy
      : res.status(404).send("Campuses List Not Found"); // if allCampuses is falsey
  } catch (error) {
    next(error);
  }
});

//handling id request > single campus 
router.get("/:id", async (req, res, next) => {
  const campusId = req.params.id;

  try {
    const singleCampus = await Campus.findByPk(campusId, {
      include: Student, //Include the associated student model
    });
    singleCampus
      ? res.status(200).json(singleCampus)
      : res.status(404).send("Campus data not found");
  } catch (error) {
    next(error);
  }
});

router.post("/addCampus", async (req, res, next) => {
  //handled empty req body
  

  try {
    if (!req.body) {
      throw new Error ("Empty request body")
    } 
    const createCampus = await Campus.create(req.body);
    res.send(createCampus);

  } catch (error) {
    return res.status(400).send(error.message);
  }

});

router.put("/:id", async (req, res, next) => {
  const campusId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedCampus = await Campus.update(updatedData, {
      where: { id: campusId },
    });

    if (updatedCampus[0] === 0) {

      return res.status(404).send("Campus Not Found");
    }

    const updatedCampusInstance = await Campus.findByPk(campusId, {
      include: Student,
    });

    res.status(200).json(updatedCampusInstance);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const campusId = req.params.id;

  try {
    const deletedCampus = await Campus.destroy({
      where: { id: campusId },
    });

    if (deletedCampus === 0) {

      return res.status(404).send("Campus Not Found");
    }

    res.status(200).send("Campus Deleted Successfully");
  } catch (error) {
    next(error);
  }
});



module.exports = router;
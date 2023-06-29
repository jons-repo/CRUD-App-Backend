const express = require("express");
const router = express.Router();
const { Campus } = require("../db/models");

// Root here is localhost:8080/api/campuses/

router.get("/", async (req, res, next) => {
  try {
    const allCampuses = await Campuses.findAll();

    allCampuses
      ? res.status(200).json(allCampuses) // if allCampuses is truthy
      : res.status(404).send("Campuses List Not Found"); // if allCampuses is falsey
  } catch (error) {
    next(error);
  }
});

module.exports = router;
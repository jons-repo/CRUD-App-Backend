const Campus = require("./campus");
const Student = require("./student");
// Associations Go Here

// Many to Many
// We set a through table "ShopperShoes" that handles the O-M relationship
Campus.hasMany(Student)
Student.belongsTo(Campus)

module.exports = {
    Campus,
    Student,
};


// Might not need it anymore
// require("./models");

//module.exports = db;

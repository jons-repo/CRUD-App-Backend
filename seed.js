const db = require("./db");
const { Campus, Student } = require("./db/models");

const seedCampus = [
    {name: "Brooklyn College", imageUrl:"" , address:"fake address1" , description:"Number One Cuny" },
    {name: "John Jay College" , imageUrl:"" , address:"fake address2" , description:"Number Two Cuny" },
    {name: "Hunter College", imageUrl:"" , address:"fake address3" , description:"Number Three CUny" }

    // // {campus_name: , name: , imageURL: , address: , description: ,},
];

const seedStudent = [
    {firstName: "Depak",lastName: "Borhara",email: "Depak123@mgmail.com", imageUrl: "", gpa: 3.5, campusId:3},
    {firstName: "Alejandro" ,lastName: "Hernandez",email: "Alejandro324@gmail.com", imageUrl: "", gpa: 2.9, campusId:2},
    {firstName: "Aurelio",lastName: "Santos",email: "Aurelio345@gmail.com", imageUrl: "", gpa: 4.0, campusId: 1}

//   {student_id: , firstName: ,lastName: ,email: , image_url: , gpa: , campus_id: },
];


  const seed = async () => {
    await Campus.bulkCreate(seedCampus);
    await Student.bulkCreate(seedStudent);
  };
  
  seed().then(() => process.exit());
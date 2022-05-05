const express = require('express');
const router = express.Router();
const collegeController = require("../controller/collegeController")
const internController = require("../Controller/internController")


router.post("/functionup/colleges", collegeController.createColleges)
router.post("/functionup/interns", internController.createInterns)
router.get("/functionup/collegeDetails", collegeController.colleageDetails)
module.exports = router;
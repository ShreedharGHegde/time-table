const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const ClassDetail = require("../models/ClassDetail");

router.get("/classdetail", (req, res) => {
  ClassDetail.find()
    .populate("teacher")
    .populate("subject")
    .populate("room")
    .populate("batch")
    .then(classdetail => res.send(classdetail));
});

router.post("/classdetail", (req, res) => {
  let { teacher, from, to, day, subject } = req.body;

  ClassDetail.findOne({ teacher: teacher }).then(teacherExists => {
    if (!teacherExists) {
      res.send({ message: "Teacher already assigned" });
    } else {
      ClassDetail.findOne({
        teacher: teacher,
        day: day,
        from: from,
        to: to,
        subject: subject
      }).then(classdetailExists => {
        if (!classdetailExists) {
          res.send({ message: "Time slot already assigned" });
        } else {
          const classdetail = new ClassDetail(req.body);
          classdetail
            .save()
            .then(classdetail =>
              res.send({ classdetail: classdetail, message: "success" })
            );
        }
      });
    }
  });

  console.log(req.body);
});

router.put("/classdetail/:id", (req, res) => {
  console.log("body", req.body);
});

router.delete("/classdetail/:id", (req, res) => {
  console.log("body", req.body);
});

module.exports = {
  classDetailRouter: router
};

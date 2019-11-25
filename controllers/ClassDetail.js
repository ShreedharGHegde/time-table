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
  let { teacher, start, end, day, subject, batch } = req.body;

  console.log(
    "teacher:",
    teacher,
    "start:",
    start,
    "end:",
    end,
    "subject:",
    subject,
    "batch:",
    batch,
    "day:",
    day
  );

  ClassDetail.findOne({
    $and: [{ day: day }, { batch: batch }, { start: start }, { end: end }]
  })
    .then(timeAlreadyAssigned => {
      console.log("exists", timeAlreadyAssigned);
      if (timeAlreadyAssigned) {
        res.send({ message: "time already assigned" });
      }
      ClassDetail.findOne({
        $and: [
          { teacher: teacher },
          { day: day },
          { start: start },
          { end: end }
        ]
      })
        .then(teacherAlreadyAssigned => {
          if (teacherAlreadyAssigned) {
            res.send({ message: "teacher already assigned" });
            return;
          }
          console.log("second exists", teacherAlreadyAssigned);
          let classdetail = new ClassDetail(req.body);
          classdetail
            .save()
            .then(savedClassDetail => {
              console.log("saved", savedClassDetail),
                res.send({ message: "success" });
            })
            .catch(err => console.log("save err", err));
        })
        .catch(err => console.log("err", err));
    })
    .catch(err => console.log("outer err", err));

  // ClassDetail.save(req.body).then(res => console.log('saved',res))

  console.log('body',req.body);
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

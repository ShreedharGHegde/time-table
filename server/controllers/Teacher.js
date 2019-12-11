const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Teacher = require("../models/Teacher");

router.get("/", (req, res) => {
  console.log("teacher get");
  Teacher.find()
    .then(teachers => res.send({ teachers: teachers, success: true }))
    .catch(err => {
      res.send({ err: err, success: fasle });
    });
});

router.post("/", (req, res) => {
  console.log("body", req.body);
  const teacher = new Teacher({ name: req.body.name });

  teacher
    .save()
    .then(teacher => res.send({ teacher: teacher, success: true }))
    .catch(err => res.send({ err: err, success: false }));
});

router.put("/:id", (req, res) => {
  console.log("body", req.body);
});

router.delete("/:id", (req, res) => {
  console.log("body", req.body);
});

module.exports = {
  teacherRouter: router
};

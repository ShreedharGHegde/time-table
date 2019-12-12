const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Batch = require("../models/Batch");

router.get("/", (req, res) => {
  console.log("batch get");
  Batch.find().then(batches => res.send(batches));
});

router.post("/", (req, res) => {
  console.log(req.body);
  const batch = new Batch({ name: req.body.name });

  batch.save().then(batch => res.send(batch));
});

router.put("/:id", (req, res) => {
  console.log("body", req.body);
});

router.delete("/:id", (req, res) => {
  console.log("body", req.body);
});

module.exports = {
  batchRouter: router
};

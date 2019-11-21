const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const cors = require("cors");

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const { teacherRouter } = require("./controllers/Teacher");
const { subjectRouter } = require("./controllers/Subject");
const { roomRouter } = require("./controllers/Room");
const { batchRouter } = require("./controllers/Batch");
const { classDetailRouter } = require("./controllers/ClassDetail");

const Teacher = require("./models/Teacher");
const Room = require("./models/Room");
const Batch = require("./models/Batch");
const Subject = require("./models/Subject");

mongoose
  .connect("mongodb://shreedhar:shree1996@ds117093.mlab.com:17093/timetable", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("db connected");
  })
  .catch(err => console.log("db err", err));

app.use("/", teacherRouter);
app.use("/", subjectRouter);
app.use("/", roomRouter);
app.use("/", batchRouter);
app.use("/", classDetailRouter);

app.get("/all", (req, res) => {
  Promise.all([Teacher.find(), Subject.find(), Room.find(), Batch.find()])
    .then(values => {
      console.log("values", values);
      res.send({
        teachers: values[0],
        subjects: values[1],
        rooms: values[2],
        batches: values[3]
      });
    })
    .catch(err => console.log("err", err));
});

app.listen(port, () => {
  console.log("Server running on port 5000");
});

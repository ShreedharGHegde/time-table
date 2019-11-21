import React, { Component } from "react";

import axios from "axios";
import moment from 'moment'

class TimeTableForm extends Component {
  state = {
    teachers: [],
    subjects: [],
    batches: [],
    rooms: [],
    teacher: null,
    room: null,
    batch: null,
    subject: null,
    start: "00:00:00",
    end: "00:00:00",
    classDetailType: null
  };

  onOptionChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onAddClassClick = e => {

    let start = 

    e.preventDefault()
    let classDetail = {
      teacher: this.state.teacher,
      batch: this.state.batch,
      room: this.state.room,
      subject: this.state.subject,
      start: new moment(this.state.start, 'HH:mm:ss').local(),
      end: new moment(this.state.end, 'HH:mm:ss').local(),
      classDetailType: this.state.classDetailType
    };

    console.log('class detail', classDetail)
    
    axios.post('http://localhost:5000/classdetail', classDetail)
    .then(res => console.log('res',res))
    .catch(err => console.log('err',err))

  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/all")
      .then(res => {
        console.log(res.data.teachers);
        this.setState({
          teachers: res.data.teachers,
          rooms: res.data.rooms,
          subjects: res.data.subjects,
          batches: res.data.batches
        });
      })
      .catch(err => console.log("err", err));
  }

  render() {
    let teachers = this.state.teachers
      ? this.state.teachers.map((teacher, index) => (
          <option key={index} value={teacher._id}>
            {teacher.name}
          </option>
        ))
      : null;

    let rooms = this.state.rooms
      ? this.state.rooms.map((room, index) => (
          <option key={index} value={room._id}>
            {room.name}
          </option>
        ))
      : null;

    let subjects = this.state.subjects
      ? this.state.subjects.map((subject, index) => (
          <option key={index} value={subject._id}>
            {subject.name}
          </option>
        ))
      : null;

    let batches = this.state.batches
      ? this.state.batches.map((batch, index) => (
          <option key={index} value={batch._id}>
            {batch.name}
          </option>
        ))
      : null;

    return (
      <div style={{ marginTop: 80 }}>
        <center>
          <form onSubmit={this.onAddClassClick}>
            <select
              name="teacher"
              onChange={this.onOptionChange}
              style={{ marginRight: 10 }}
            >
              <option>select teacher</option>
              {teachers}
            </select>
            <select
              style={{ marginRight: 10 }}
              name="room"
              onChange={this.onOptionChange}
            >
              <option>select room</option>
              {rooms}
            </select>
            <select
              style={{ marginRight: 10 }}
              name="subject"
              onChange={this.onOptionChange}
            >
              <option>select subject</option>
              {subjects}
            </select>
            <select
              style={{ marginRight: 10 }}
              name="batch"
              onChange={this.onOptionChange}
            >
              <option>select batch</option>
              {batches}
            </select>
            <select
              style={{ marginRight: 10 }}
              name="classDetailType"
              onChange={this.onOptionChange}
            >
              <option>Class Type</option>
              <option value="theory">Theory</option>
              <option value="practical">Practical</option>
            </select>
            From
            <input
              type="time"
              name="start"
              value={this.state.start}
              style={{ marginRight: 10 }}
              onChange={this.onOptionChange}
            />
            To
            <input
              type="time"
              name="end"
              value={this.state.end}
              style={{ marginRight: 10 }}
              onChange={this.onOptionChange}
            />
            <button onClick={this.onAddClassClick}>Add Class</button>
          </form>
        </center>
      </div>
    );
  }
}

export default TimeTableForm;

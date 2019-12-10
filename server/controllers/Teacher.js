const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()


const Teacher = require('../models/Teacher')


router.get('/', (req, res) => {
    console.log('teacher get')
    Teacher.find().then(teachers => res.send(teachers))
})

router.post('/', (req, res) => {
    console.log('body',req.body)
    const teacher = new Teacher({name: req.body.name})

    teacher.save().then(teacher => res.send(teacher))
})

router.put('/:id', (req, res) => {
    console.log('body',req.body)
})

router.delete('/:id', (req, res) => {
    console.log('body',req.body)
})


module.exports = {
    teacherRouter: router
}

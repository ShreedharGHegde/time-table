const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()


const ClassDetail = require('../models/ClassDetail')


router.get('/classdetail', (req, res) => {
    ClassDetail.find().then(classdetail => res.send(classdetail))
})

router.post('/classdetail', (req, res) => {
    console.log(req.body)
    const classdetail = new ClassDetail(req.body)

    classdetail.save().then(classdetail => res.send(classdetail))
})

router.put('/classdetail/:id', (req, res) => {
    console.log('body',req.body)
})

router.delete('/classdetail/:id', (req, res) => {
    console.log('body',req.body)
})


module.exports = {
    classDetailRouter: router
}

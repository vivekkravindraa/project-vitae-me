const express = require('express');
const { Education } = require('../models/education');
const { authenticateUser } = require('../middlewares/authentication');
const { validateId } = require('../middlewares/utilities');
const _ = require('lodash');

const router = express.Router();

router.get('/', authenticateUser, (req,res) => {
    Education.find()
    .then((educations) => {
        res.send(educations);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.get('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;

    Education.findById(id)
    .then((education) => {
        res.send(education);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.post('/', authenticateUser, (req,res) => {
    let body = req.body;
    let education = new Education(body);

    education.save()
    .then((education) => {
        res.send(education);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.put('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let body = req.body;

    Education.findByIdAndUpdate(id, {$set: body}, {new: true, runValidators: true})
    .then((education) => {
        res.send(education);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.delete('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;

    Education.findByIdAndRemove(id)
    .then((education) => {
        res.send(education);
    })
    .catch((error) => {
        res.send(error);
    });
});

module.exports = {
    educationsController: router
}
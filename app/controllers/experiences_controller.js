const express = require('express');
const { Experience } = require('../models/experience');
const { authenticateUser } = require('../middlewares/authentication');
const { validateId } = require('../middlewares/utilities');
const _ = require('lodash');

const router = express.Router();

router.get('/', authenticateUser, (req,res) => {
    Experience.find().populate('projects')
    .then((experiences) => {
        res.send(experiences);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.get('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;

    Experience.findById(id)
    .then((experience) => {
        res.send(experience);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.post('/', authenticateUser, (req,res) => {
    let body = req.body;
    let experience = new Experience(body);

    experience.save()
    .then((experience) => {
        res.send(experience);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.put('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let body = req.body;

    Experience.findByIdAndUpdate(id, {$set: body}, {new: true, runValidators: true})
    .then((experience) => {
        res.send(experience);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.delete('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;

    Experience.findByIdAndRemove(id)
    .then((experience) => {
        res.send(experience);
    })
    .catch((error) => {
        res.send(error);
    });
});

module.exports = {
    experiencesController: router
}
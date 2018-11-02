const express = require('express');
const { Project } = require('../models/project');
const { authenticateUser } = require('../middlewares/authentication');
const { validateId } = require('../middlewares/utilities');
const _ = require('lodash');

const router = express.Router();

router.get('/', authenticateUser, (req,res) => {
    Project.find()
    .then((projects) => {
        res.send(projects);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.get('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;

    Project.findById(id)
    .then((project) => {
        res.send(project);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.post('/', authenticateUser, (req,res) => {
    let body = req.body;
    let project = new Project(body);

    project.save()
    .then((project) => {
        res.send(project);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.put('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let body = req.body;

    Project.findByIdAndUpdate(id, {$set: body}, {new: true, runValidators: true})
    .then((project) => {
        res.send(project);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.delete('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;

    Project.findByIdAndRemove(id)
    .then((project) => {
        res.send(project);
    })
    .catch((error) => {
        res.send(error);
    });
});

module.exports = {
    projectsController: router
}
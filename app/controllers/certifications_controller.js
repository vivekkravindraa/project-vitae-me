const express = require('express');
const { Certification } = require('../models/certification');
const { authenticateUser } = require('../middlewares/authentication');
const { validateId } = require('../middlewares/utilities');
const _ = require('lodash');

const router = express.Router();

router.get('/', authenticateUser, (req,res) => {
    Certification.find()
    .then((certifications) => {
        res.send(certifications);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.get('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;

    Certification.findById(id)
    .then((certification) => {
        res.send(certification);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.post('/', authenticateUser, (req,res) => {
    let body = req.body;
    let certification = new Certification(body);

    certification.save()
    .then((certification) => {
        res.send(certification);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.put('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let body = req.body;

    Certification.findByIdAndUpdate(id, {$set: body}, {new: true, runValidators: true})
    .then((certification) => {
        res.send(certification);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.delete('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;

    Certification.findByIdAndRemove(id)
    .then((certification) => {
        res.send(certification);
    })
    .catch((error) => {
        res.send(error);
    });
}); 

module.exports = {
    certificationsController: router
}
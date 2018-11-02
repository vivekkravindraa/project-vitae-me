const express = require('express');

const { applicantsController } = require('../app/controllers/applicants_controller');
const { certificationsController } = require('../app/controllers/certifications_controller');
const { educationsController } = require('../app/controllers/educations_controller');
const { experiencesController } = require('../app/controllers/experiences_controller');
const { projectsController } = require('../app/controllers/projects_controller');
const { usersController } = require('../app/controllers/users_controller');

const router = express.Router();

router.use('/applicants', applicantsController);
router.use('/certifications', certificationsController);
router.use('/educations', educationsController);
router.use('/experiences', experiencesController);
router.use('/projects', projectsController);
router.use('/users', usersController);

module.exports = {
    router
}
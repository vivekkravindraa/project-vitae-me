const express = require('express');
const { Applicant } = require('../models/applicant');
const { authenticateUser } = require('../middlewares/authentication');
const { validateId } = require('../middlewares/utilities');
const _ = require('lodash');

const router = express.Router();

router.get('/', authenticateUser, (req,res) => {
    Applicant.find()
    .then((applicants) => {
        res.send(applicants);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.get('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;

    Applicant.findById(id)
    .then((applicant) => {
        res.send(applicant);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.post('/', authenticateUser, (req,res) => {
    let body = req.body;
    let applicant = new Applicant(body);

    applicant.save()
    .then((applicant) => {
        res.send(applicant);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.put('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let body = req.body;

    Applicant.findByIdAndUpdate(id, {$set: body}, {new: true, runValidators: true})
    .then((applicant) => {
        res.send(applicant);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.delete('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;

    Applicant.findByIdAndRemove(id)
    .then((applicant) => {
        res.send(applicant);
    })
    .catch((error) => {
        res.send(error);
    });
});

router.get('/:id/educations', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;

    Applicant.findById(id)
    .then((applicants) => {
        if(applicants.length === 0) {
            res.send({
                notice: 'no applicants found'
            })
        }
        res.send({
            'educations': applicants.educations,
            notice: 'displaying the educations belonging to applicant id'
        });
    })
    .catch((error) => {
        res.send(error);
    })
});

router.post('/:id/educations', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let body = req.body;

    Applicant.findById(id)
    .then((applicant) => {
        if(applicant) {
            applicant.educations.push(body);
            return applicant.save();
        }
        res.send({
            notice: 'applicant not found'
        })
    })
    .then((applicant) => {
        let education = applicant.educations[applicant.educations.length - 1];
        res.send({
            education,
            notice: 'successfully added education details'
        })
    })
    .catch((error) => {
        res.send(error);
    });
});

router.put('/:id/educations/:edu_id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let eduId = req.params.edu_id;
    let body = _.pick(req.body, ['institution','university']);

    Applicant.findById(id)
    .then((applicant) => {
        if(applicant) {
            let detail = applicant.educations.id(eduId);
            detail.institution = body.institution ? body.institution : detail.institution;
            detail.university = body.university ? body.university : detail.university;
            return applicant.save()
        }
        res.send({
            notice: 'applicant not found'
        })
    })
    .then((applicant) => {
        res.send({
            detail: applicant.educations.id(eduId),
            notice: 'successfully updated education details'
        })
    })
    .catch((error) => {
        res.send(error);
    })
});

router.delete('/:id/educations/:edu_id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let eduId = req.params.edu_id;
    
    Applicant.findById(id)
    .then((applicant) => {
        if(applicant) {
            applicant.educations.remove(eduId);
            return applicant.save()
        }
        res.send({
            notice: 'applicant not found'
        })
    }).then((applicant) => {
        res.send({
            notice: 'successfully removed education details'
        })
    })
    .catch((error) => {
        res.send(error);
    })
});

router.get('/:id/certifications', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;

    Applicant.findById(id)
    .then((applicants) => {
        if(applicants.length === 0) {
            res.send({
                notice: 'no applicants found'
            })
        }
        res.send({
            'certifications': applicants.certifications,
            notice: 'displaying the certifications belonging to applicant id'
        });
    })
    .catch((error) => {
        res.send(error);
    })
});

router.post('/:id/certifications', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let body = req.body;

    Applicant.findById(id)
    .then((applicant) => {
        if(applicant) {
            applicant.certifications.push(body);
            return applicant.save();
        }
        res.send({
            notice: 'applicant not found'
        })
    })
    .then((applicant) => {
        let certification = applicant.certifications[applicant.certifications.length - 1];
        res.send({
            certification,
            notice: 'successfully added certification details'
        })
    })
    .catch((error) => {
        res.send(error);
    });
});

router.put('/:id/certifications/:cert_id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let certId = req.params.cert_id;
    let body = _.pick(req.body, ['name','description','certifiedBy']);

    Applicant.findById(id)
    .then((applicant) => {
        if(applicant) {
            let detail = applicant.certifications.id(certId);
            detail.name = body.name ? body.name : detail.name;
            detail.description = body.description ? body.description : detail.description;
            detail.certifiedBy = body.certifiedBy ? body.certifiedBy : detail.certifiedBy;
            return applicant.save()
        }
        res.send({
            notice: 'applicant not found'
        })
    })
    .then((applicant) => {
        res.send({
            detail: applicant.certifications.id(certId),
            notice: 'successfully updated certification details'
        })
    })
    .catch((error) => {
        res.send(error);
    })
});

router.delete('/:id/certifications/:cert_id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let certId = req.params.cert_id;
    
    Applicant.findById(id)
    .then((applicant) => {
        if(applicant) {
            applicant.certifications.remove(certId);
            return applicant.save()
        }
        res.send({
            notice: 'applicant not found'
        })
    }).then((applicant) => {
        res.send({
            notice: 'successfully removed certification details'
        })
    })
    .catch((error) => {
        res.send(error);
    })
});

router.get('/:id/experiences', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;

    Applicant.findById(id)
    .then((applicants) => {
        if(applicants.length === 0) {
            res.send({
                notice: 'no applicants found'
            })
        }
        res.send({
            'experiences': applicants.experiences,
            notice: 'displaying the experiences belonging to applicant id'
        });
    })
    .catch((error) => {
        res.send(error);
    })
});

router.post('/:id/experiences', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let body = req.body;

    Applicant.findById(id)
    .then((applicant) => {
        if(applicant) {
            applicant.experiences.push(body);
            return applicant.save();
        }
        res.send({
            notice: 'applicant not found'
        })
    })
    .then((applicant) => {
        let experience = applicant.experiences[applicant.experiences.length - 1];
        res.send({
            experience,
            notice: 'successfully added experience details'
        })
    })
    .catch((error) => {
        res.send(error);
    });
});

router.put('/:id/experiences/:exp_id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let expId = req.params.exp_id;
    let body = _.pick(req.body, ['company','position','website']);

    Applicant.findById(id)
    .then((applicant) => {
        if(applicant) {
            let detail = applicant.experiences.id(expId);
            detail.company = body.company ? body.company : detail.company;
            detail.position = body.position ? body.position : detail.position;
            detail.website = body.website ? body.website : detail.website;
            return applicant.save()
        }
        res.send({
            notice: 'applicant not found'
        })
    })
    .then((applicant) => {
        res.send({
            detail: applicant.experiences.id(expId),
            notice: 'successfully updated experience details'
        })
    })
    .catch((error) => {
        res.send(error);
    })
});

router.delete('/:id/experiences/:exp_id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let expId = req.params.exp_id;
    
    Applicant.findById(id)
    .then((applicant) => {
        if(applicant) {
            applicant.experiences.remove(expId);
            return applicant.save()
        }
        res.send({
            notice: 'applicant not found'
        })
    }).then((applicant) => {
        res.send({
            notice: 'successfully removed experience details'
        })
    })
    .catch((error) => {
        res.send(error);
    })
});

router.get('/:id/projects', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;

    Applicant.findById(id)
    .then((applicants) => {
        if(applicants.length === 0) {
            res.send({
                notice: 'no applicants found'
            })
        }
        res.send({
            'projects': applicants.projects,
            notice: 'displaying the projects belonging to applicant id'
        });
    })
    .catch((error) => {
        res.send(error);
    })
});

router.post('/:id/projects', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let body = req.body;

    Applicant.findById(id)
    .then((applicant) => {
        if(applicant) {
            applicant.projects.push(body);
            return applicant.save();
        }
        res.send({
            notice: 'applicant not found'
        })
    })
    .then((applicant) => {
        let project = applicant.projects[applicant.projects.length - 1];
        res.send({
            project,
            notice: 'successfully added project details'
        })
    })
    .catch((error) => {
        res.send(error);
    });
});

router.put('/:id/projects/:pro_id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let proId = req.params.pro_id;
    let body = _.pick(req.body, ['title','description','technologiesUsed']);

    Applicant.findById(id)
    .then((applicant) => {
        if(applicant) {
            let detail = applicant.projects.id(proId);
            detail.title = body.title ? body.title : detail.title;
            detail.description = body.description ? body.description : detail.description;
            detail.technologiesUsed = body.technologiesUsed ? body.technologiesUsed : detail.technologiesUsed;
            return applicant.save()
        }
        res.send({
            notice: 'applicant not found'
        })
    })
    .then((applicant) => {
        res.send({
            detail: applicant.projects.id(proId),
            notice: 'successfully updated project details'
        })
    })
    .catch((error) => {
        res.send(error);
    })
});

router.delete('/:id/projects/:pro_id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;
    let proId = req.params.pro_id;
    
    Applicant.findById(id)
    .then((applicant) => {
        if(applicant) {
            applicant.projects.remove(proId);
            return applicant.save()
        }
        res.send({
            notice: 'applicant not found'
        })
    }).then((applicant) => {
        res.send({
            notice: 'successfully removed project details'
        })
    })
    .catch((error) => {
        res.send(error);
    })
});

module.exports = {
    applicantsController: router
}
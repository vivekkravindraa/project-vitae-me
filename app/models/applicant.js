const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const { educationSchema } = require('./education');
const { experienceSchema } = require('./experience');
const { projectSchema } = require('./project');
const { certificationSchema } = require('./certification');

const validator = require('validator');

const applicantSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function(value) {
                return validator.isEmail(value);
            },
            message: function() {
                return 'invalid email format';
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function(value) {
                return validator.isNumeric(value) && validator.isLength(value, {min: 10, max: 10});
            },
            message: function() {
                return 'should be 10 digits'
            }
        }
    },
    gitHub: {
        type: String,
        unique: true,
        validate: {
            validator: function(value) {
                return validator.isURL(value);
            },
            message: function() {
                return 'invalid gitHub link';
            }
        }
    },
    linkedIn: {
        type: String,
        unique: true,
        validate: {
            validator: function(value) {
                return validator.isURL(value);
            },
            message: function() {
                return 'invalid linkedIn link';
            }
        }
    },
    about: {
        type: String,
        maxlength: 1000
    },
    skills: [
        {
            type: String,
            required: true,
            max: 10
        }
    ],
    languages: [
        {
            type: String,
            max: 5
        }
    ],
    interests: [
        {
            type: String,
            max: 5
        }
    ],
    achievements: [
        {
            body: {
                type: String,
            },
            providedBy: {
                type: String
            },
            date: {
                type: Date,
            }
        }
    ],
    educations: [ educationSchema ],
    experiences: [ experienceSchema ],
    projects: [ projectSchema ],
    certifications: [ certificationSchema ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = {
    Applicant
}

// Sample Object

// {
//     "name": "Vivek Ravindra",
//     "email": "vivek.vkit@gmail.com",
//     "mobile": "9148325135",
//     "gitHub": "www.github.com/vivekravindra4",
//     "linkedIn": "www.linkdein.com/vivekkravindraa",
//     "about": "",
//     "skills": ["js","mongodb","express","react","node"],
//     "languages": ["kannada","english","hindi"],
//     "interests": ["wildlife","photography","travel"],
//     "achievements": [{
//         "body": "Excellent Work",
//         "providedBy": "iBusiness Software Pvt. Ltd.",
//         "date": "2017-07-31"
//     }],
//     "user": "5bbd7ba5ca4a751965880531"
// }
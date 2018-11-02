const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    technologiesUsed: [ String ],
    link: {
        type: String,
        validate: {
            validator: function(value) {
                return validator.isURL(value);
            },
            message: function() {
                return 'invalid link';
            }
        }
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = {
    projectSchema,
    Project
}

// Sample Object

// {
//     "title": "Vitae-ME",
//     "description": "Building curriculum vitae..",
//     "technologiesUsed": ["MongoDB", "Express", "React", "Node.js"],
//     "link": "http://www.vitaeme.com",
//     "startDate": "2018-09-20",
//     "endDate": "2018-11-12"
// }
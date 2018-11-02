const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    company: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    place: {
        type: String
    }
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = {
    experienceSchema,
    Experience
}

// Sample Object 

// {
//     "company": "DCT Academy",
//     "position": "Trainee",
//     "website": "http://www.dctacademy.com",
//     "startDate": "2018-01-06",
//     "endDate": "2018-01-11",
//     "place": "Bangalore, KA"
// }
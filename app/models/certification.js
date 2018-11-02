const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const certificationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        max: 1000
    },
    certifiedBy: {
        type: String,
        required: true
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

const Certification = mongoose.model('Certification', certificationSchema);

module.exports = {
    certificationSchema,
    Certification
}

// Sample Object

// {
//     "name": "Full Stack Web Developer",
//     "description": "Advanced Hands On Course on Full Stack Development",
//     "certifiedBy": "DCT Academy",
//     "startDate": "2018-01-06",
//     "endDate": "2018-01-11",
//     "place": "Bangalore, KA"
// }
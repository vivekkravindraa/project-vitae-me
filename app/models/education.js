const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const educationSchema = new Schema({
    institution: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    studyType: {
        type: String,
        required: true
    },
    grade: {
        gradeType: {
            type: String,
            enum: ['cgpa','percentage']
        },
        gradeValue: {
            type: Number
        }
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

const Education = mongoose.model('Education',educationSchema);

module.exports = {
    educationSchema,
    Education
}

// Sample Object

// {
//     "institution": "Vivekananda Institute of Technology",
//     "university": "VTU",
//     "studyType": "BE",
//     "grade": {
//         "gradeType": "percentage",
//         "gradeValue": 64.4
//     },
//     "startDate": "2011-09-19",
//     "endDate": "2015-08-15",
//     "place": "Bangalore, KA"
// }
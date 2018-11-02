const { ObjectID } = require('mongodb');

const validateId = function (req, res, next) {
    if (!ObjectID.isValid(req.params.id)) {
        res.send({
            notice: 'invalid object id'
        })
    } else {
        next();
    }
};

module.exports = {
    validateId
}
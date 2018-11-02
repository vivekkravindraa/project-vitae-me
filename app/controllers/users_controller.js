const express = require('express');
const { User } = require('../models/user');
const { authenticateUser } = require('../middlewares/authentication');
const { validateId } = require('../middlewares/utilities');
const _ = require('lodash');

const router = express.Router();

router.get('/', authenticateUser, (req,res) => {
    User.find()
    .then((users) => {
        res.send(users);
    })
    .catch((err) => {
        res.send(err);
    });
});

router.get('/:id', authenticateUser, validateId, (req,res) => {
    let id = req.params.id;

    User.findById(id)
    .then((user) => {
        res.send(user);
    })
    .catch((err) => {
        res.send(err);
    });
});

router.post('/', (req, res) => {
    let body = _.pick(req.body, ['username', 'email', 'password', 'role']);
    let user = new User(body);

    user.save().then((user) => {
        return user.generateToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((err) => {
        res.send(err); 
    });
});

router.get('/profile', authenticateUser, (req, res) => {
    res.send(req.locals.user); 
});

router.post('/login', authenticateUser, (req,res) => {
    let body = _.pick(req.body, ['email','password']);

    User.findByEmailAndPassword(body.email, body.password)
    .then((user) => {
        return user.generateToken();
    })
    .then((token) => {
        res.header('x-auth',token).send();
    })
    .catch((err) => {
        res.send(err);
    });
});

router.delete('/logout',authenticateUser, (req,res) => {
    req.locals.user.deleteToken(req.locals.token)
    .then(() => {
        res.send();
    })
    .catch((err) => {
        res.send(err);
    });
});

module.exports = {
    usersController: router
}
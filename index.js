const express = require('express');
const morgan = require('morgan');

const { mongoose } = require('./config/db');
const { router } = require('./config/routes');

const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use(express.json());

app.use('/', router);

app.get('/',(req,res) => {
    res.send({
        message: 'Welcome..'
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
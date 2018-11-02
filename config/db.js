const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://localhost:27017/vitaeME`, { useNewUrlParser: true })
.then(() => {
    console.log(`connected to db`);
})
.catch(error => {
    res.send(error);
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
}
const mongoose = require('mongoose');
const { mongodb } = require('./keys');

mongoose.set('useUnifiedTopology', true);
mongoose.connect(mongodb.URI, {
        useNewUrlParser: true
    })
    .then(db => console.log('DataBase is connected'))
    .catch(err => console.log(err));
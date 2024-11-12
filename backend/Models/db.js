const mongoose = require('mongoose');

const mongo_url = process.env.MONGODB_URL;

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected Successfully...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })
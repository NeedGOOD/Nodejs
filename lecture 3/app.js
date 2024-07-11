// const { error } = require('console');

const mongoose = require('mongoose');
require('dotenv').config();
let db_user = process.env.DB_USER;
let db_password = process.env.DB_PASSWORD;
mongoose.connect(`mongodb+srv://${db_user}:${db_password}@vlad.vxb7xzg.mongodb.net/?retryWrites=true&w=majority&appName=Vlad`);

const User = mongoose.model('User', {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const user1 = new User({
    firstName: 'John',
    lastName: 'Smith',
    age: 38
});

user1.save()
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
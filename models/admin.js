const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    email: {
        type: String,
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
    },
    registrationAt: {
        type: Date,
    },
    role: {
        type: String,
    },
    status: {
        type: String
    }
});


const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;

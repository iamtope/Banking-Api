const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    cardNumber:{
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Account = module.exports = mongoose.model('Account', AccountSchema);
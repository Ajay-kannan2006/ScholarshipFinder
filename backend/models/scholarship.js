const mongoose = require('mongoose');

let scholarSchema = mongoose.Schema({
    name: String,
    provider: String,
    application_deadline: Date,
    gender_applicable: [{
        type: String,
        enum: ['male', 'female', 'transgender'],
    }],

    caste_eligibility: [{
        type: String,
        enum: ['BC', 'MBC', 'OC', 'SC/ST'],
    }],
    studies_field_eligibility: [
        {
            type: String,
            enum: ['below 10th', 'below 12th', 'B.E', 'B.Tech', 'B.Com', 'M.E'],
        }
    ],
    total_award_amount: Number,
    time_of_disburse: Number,
    amount_per_disburse: Number,
    scheme: {
        type: String,
        enum: ['weekly', 'monthly', 'yearly'],
    },
    applied_people: [{
        type: mongoose.Schema.ObjectId,
    }],
    application_link: String,
})

let Scholarship = mongoose.model('Scholarship', scholarSchema);
module.exports = Scholarship;
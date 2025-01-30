const express = require('express');
const app = express();
const Scholarship = require('./models/scholarship');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/user');
const data = require('./data');
const cors = require('cors');
const bcrypt = require('bcrypt');
dotenv.config();
app.use(express.json());
app.use(cors({
    origin: 'https://scholarship-finder-xd5f.vercel.app/',
    methods: ['GET', 'POST'],
    credentials: true,
}));
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected");
    })
    .catch((err) => {
        console.log(err);
    })

app.get('/add-scholarship', async (req, res) => {
    // await Scholarship.deleteMany({});
    for (let scholarship of data) {
        let data1 = new Scholarship(scholarship);
        console.log("Hello");
        await data1.save();
    }
    // await Scholarship.insertMany(data);
    res.send("Data loaded successfully");
})
app.get('/scholarship-details', async (req, res) => {

    let data1 = await Scholarship.find({});
    res.cookie("Token", {
        httpOnly: true,
        maxAge: session
    }).status(200).json(data1)
})

app.post('/signup', async (req, res) => {
    const session = 1000 * 60 * 60 * 24 * 7;
    let { user_name, email, password, gender, studies, caste } = req.body;
    try {
        let check = await User.find({ $or: [{ email: email }, { user_name: user_name }] });
        console.log(check);
        if (!check.length) {
            let new_user = new User({
                user_name: user_name,
                email: email,
                password: password,
                gender: gender,
                studies: studies,
                caste: caste,
            });
            // console.log(new_user)
            let sc_data = await Scholarship.find({ $and: [{ 'gender_applicable': { $in: [new_user.gender] } }, { 'caste_eligibility': { $in: [new_user.caste] } }, { 'studies_field_eligibility': { $in: [new_user.studies] } }] });
            // console.log(sc_data);
            await new_user.save();
            res.status(200).json({ data: sc_data, message: true });

        }
        else {
            res.json({ message: false });
        }
    } catch (err) {
        console.log(err);
    }
});

app.post('/login', async (req, res) => {
    const session = 1000 * 60 * 60 * 24 * 7;
    let { email, password } = req.body;
    let check = await User.find({ email: email, password: password });
    console.log(check);
    if (!check.length) {
        res.json({ message: false })
    } else {
        let sc_data = await Scholarship.find({ $and: [{ 'gender_applicable': { $in: [check[0].gender] } }, { 'caste_eligibility': { $in: [check[0].caste] } }, { 'studies_field_eligibility': { $in: [check[0].studies] } }] });
        console.log(sc_data);
        res.status(200).json({ data: sc_data, message: true });
    }
})

app.listen(8080, () => {
    console.log('server connected');
})

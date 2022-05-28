const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();


exports.dbConnect = () => {
    mongoose.connect(process.env.DB_URI)
        .then(res => console.log("Connected to DB"))
        .catch(err => console.log(err))





}
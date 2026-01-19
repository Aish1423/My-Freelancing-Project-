const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/FREELANCER_PROJECT")

    .then(() => {
        console.log("DB is connected")
    })

    .catch((err) => {
        console.log("error  in DB connection", err);

    })
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    password: { type: String, default: "" },
    userType: { type: Number, default: 0 },
    clientId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: "client"},
    bidderId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: "bde" },
    createdAt: { type: Date, default: Date.now() },
    status: { type: Boolean, default: true },

})
module.exports = mongoose.model("user", userSchema)
const mongoose = require("mongoose")

const bdeSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    contact: { type: Number, default: "" },
    preferenceId: {type: mongoose.Schema.Types.ObjectId, default: null, ref: "category"},
    userId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: "user" },
    createdAt: { type: Date, default: Date.now() },
    status: { type: Boolean, default: true }
})

module.exports = mongoose.model('BDE', bdeSchema)
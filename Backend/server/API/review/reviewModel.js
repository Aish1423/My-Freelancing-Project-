const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    bidderId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: "bde"},
    projectId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: "project"},
    companyId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: "company" },
    review: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now() },
    status: { type: Boolean, default: true },

})
module.exports = mongoose.model("review", reviewSchema)
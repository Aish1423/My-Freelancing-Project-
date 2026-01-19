const mongoose = require("mongoose")

const bidSchema = new mongoose.Schema({
    clientId: { type:mongoose.Schema.Types.ObjectId, default:null, ref:"client" },
    projectId: { type:mongoose.Schema.Types.ObjectId, default:null, ref:"project" },
    bdeId: { type:mongoose.Schema.Types.ObjectId, default:null, ref:"BDE" },
    poc: { type: String, default: "" },
    duration: { type: String, default: "" },
    autoId: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now() },
    status: { type: String, default: "Pending" }  // Approved, Declined
})

module.exports = mongoose.model('bid', bidSchema)
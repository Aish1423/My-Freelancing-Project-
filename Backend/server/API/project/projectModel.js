const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: "" },
    categoryId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: "category" },
    description: { type: String, default: "" },
    attachmnent: { type: String, default: "" },
    budget: { type: Number, default: 0 },
    clientId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: "client" },
    technology: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now() },
    status: { type: Boolean, default: true },
})
module.exports = mongoose.model("project", projectSchema)
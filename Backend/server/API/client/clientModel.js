const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    autoId: { type: Number, default: 0 },
    companyName: { type: String, default: "" },
    address: { type: String, default: "" },
    country: { type: String, default: "" },
    contact: { type: Number, default: 0 },
    email: { type: String, default: "" },
    userId: { type:mongoose.Schema.Types.ObjectId, default:null, ref:"user" },
    status: { type: Boolean, default: true }
})
module.exports = mongoose.model("client", clientSchema)
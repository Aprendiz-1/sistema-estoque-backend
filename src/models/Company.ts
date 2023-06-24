import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    balance: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

const Company = mongoose.model("Company", CompanySchema);
export { Company };
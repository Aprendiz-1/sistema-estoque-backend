import mongoose from "mongoose";

const HistoricSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
});

const Historic = mongoose.model("Historic", HistoricSchema);
export { Historic };
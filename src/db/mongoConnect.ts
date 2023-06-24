import mongoose from "mongoose";

const connectDatabase = () => {
    mongoose.connect('mongodb+srv://thainan_kf:2hUsp6TPezObJYtJ@estoque-cluster.gxnjnda.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Database connected!');
    })
    .catch((error) => {
        console.log(error);
    })
}

export { connectDatabase };
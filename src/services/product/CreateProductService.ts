import mongoose from "mongoose";
import { Product } from "../../models/Product";

interface ProductRequest {
    name: string;
    description: string;
    price: number;
    amount: number;
    category: mongoose.Schema.Types.ObjectId;
    image: string;
}

class CreateProductService {
    async execute({name, description, price, amount, category, image}: ProductRequest) {
        const product = await Product.create({
            name,
            description,
            price,
            amount,
            image,
            category,
        });

        return product;
    }
}

export { CreateProductService };
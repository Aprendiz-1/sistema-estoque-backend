import { Product } from "../../models/Product";

interface ProductRequest {
    product_id: string;
    name: string;
    description: string;
    price: number;
    amount: number;
    image: string;
}

class EditProductService {
    async execute({product_id, name, description, price, amount, image}: ProductRequest) {
        const product = await Product.findByIdAndUpdate(product_id, {$set: {
            name,
            description,
            price,
            amount,
            image,
        }});

        return product;
    }
}

export { EditProductService };
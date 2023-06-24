import { Product } from "../../models/Product";

class ListProductsService {
    async execute() {
        const products = await Product.find().populate('category');
        return products;
    }
}

export { ListProductsService };
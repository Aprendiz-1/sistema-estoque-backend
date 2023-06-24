import { Product } from "../../models/Product";

class DeleteProductService {
    async execute(product_id: string) {
        const product = await Product.findByIdAndDelete(product_id);
        return product;
    }
}

export { DeleteProductService };
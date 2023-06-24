import { Product } from "../../models/Product";

class DetailProductService {
    async execute(product_id: string) {
        const product = await Product.findById(product_id);
        return product;
    }
}

export { DetailProductService };
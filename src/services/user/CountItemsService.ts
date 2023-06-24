import { Category } from "../../models/Category";
import { Company } from "../../models/Company";
import { Historic } from "../../models/Historic";
import { Product } from "../../models/Product";

class CountItemsService {
    async execute() {
        const categories = await Category.count();
        const products = await Product.count();
        const sales = await Historic.count();
        const company = await Company.findById(process.env.COMPANY_ID);

        return { categories, products, sales, balance: company.balance };
    }
}

export { CountItemsService };
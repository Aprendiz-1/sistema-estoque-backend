import { format } from "date-fns";
import { Historic } from "../../models/Historic";
import { Product } from "../../models/Product";
import { Company } from "../../models/Company";

interface RegisterRequest {
    saleAmount: number;
    productAmount: number;
    total: number;
    product_id: string;
}

class RegisterSaleService {
    async execute({saleAmount, productAmount, total, product_id}: RegisterRequest) {
        const register = await Historic.create({
            amount: saleAmount,
            total,
            createdAt: format(new Date(), 'dd/MM/yyyy'),
            product: product_id,
        });

        const company = await Company.findById(process.env.COMPANY_ID);

        await company.updateOne({$set: {
            balance: company.balance + total,
        }});

        if(productAmount === 0) {
            await Product.findByIdAndDelete(product_id);
        }

        await Product.findByIdAndUpdate(product_id, {$set: {
            amount: productAmount,
        }});

        return register;
    }
}

export { RegisterSaleService };
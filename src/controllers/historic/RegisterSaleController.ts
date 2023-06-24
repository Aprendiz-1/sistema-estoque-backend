import { Request, Response } from "express";
import { RegisterSaleService } from "../../services/historic/RegisterSaleService";

class RegisterSaleController {
    async handle(req: Request, res: Response) {
        const { saleAmount, productAmount, total, product_id } = req.body;

        const registerSaleService = new RegisterSaleService();
        const register = await registerSaleService.execute({saleAmount, productAmount, total, product_id});

        return res.json(register);
    }
}

export { RegisterSaleController };
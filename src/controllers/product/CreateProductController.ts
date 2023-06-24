import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, description, price, amount, category } = req.body;
        const { filename: image } = req.file;

        const createProductService = new CreateProductService();
        const product = await createProductService.execute({name, description, price, amount, category, image});

        return res.json(product);
    }
}

export { CreateProductController };
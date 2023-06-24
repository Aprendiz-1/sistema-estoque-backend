import { Request, Response } from "express";
import { EditProductService } from "../../services/product/EditProductService";

class EditProductController {
    async handle(req: Request, res: Response) {
        const { product_id, name, description, price, amount } = req.body;
        const { filename: image } = req.file;

        const editProductService = new EditProductService();
        const product = await editProductService.execute({product_id, name, description, price, amount, image});

        return res.json(product);
    }
}

export { EditProductController };
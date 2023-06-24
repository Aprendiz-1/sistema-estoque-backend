import { Request, Response } from "express";
import { CountItemsService } from "../../services/user/CountItemsService";

class CountItemsController {
    async handle(req: Request, res: Response) {
        const countItemsService = new CountItemsService();
        const items = await countItemsService.execute();

        return res.json(items);
    }
}

export { CountItemsController };
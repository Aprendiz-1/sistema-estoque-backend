import { Request, Response } from "express";
import { ListHistoricService } from "../../services/historic/ListHistoricService";

class ListHistoricController {
    async handle(req: Request, res: Response) {
        const listHistoricService = new ListHistoricService();
        const historic = await listHistoricService.execute();

        return res.json(historic);
    }
}

export { ListHistoricController };
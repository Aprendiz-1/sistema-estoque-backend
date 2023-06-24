import { Request, Response } from "express";
import { EditUserService } from "../../services/user/EditUserService";

class EditUserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;
        const { name, email } = req.body;
        const { filename: avatar } = req.file;

        const editUserService = new EditUserService();
        const user = await editUserService.execute({user_id, name, email, avatar});

        return res.json(user);
    }
}

export { EditUserController };
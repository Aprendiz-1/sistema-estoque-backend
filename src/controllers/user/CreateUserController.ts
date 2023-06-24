import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const { filename: avatar } = req.file;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, email, password, avatar});

        return res.json(user);
    }
}

export { CreateUserController };
import { hash } from "bcryptjs";
import { User } from "../../models/User";

interface UserRequest {
    name: string;
    email: string;
    password: string;
    avatar: string;
}

class CreateUserService {
    async execute({name, email, password, avatar}: UserRequest) {
        const userExists = await User.findOne({email: email});

        if(userExists) {
            throw new Error('User already exists!');
        }

        const passwordHash = await hash(password, 8);

        const user = await User.create({
            name,
            email,
            password: passwordHash,
            avatar,
        });

        return {
            id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
        };
    }
}

export { CreateUserService };
import { User } from "../../models/User";

type UserRequest = {
    user_id: string;
    name: string;
    email: string;
    avatar: string;
}

class EditUserService {
    async execute({user_id, name, email, avatar}: UserRequest) {
        const user = await User.findByIdAndUpdate(user_id, {$set: {
            name,
            email,
            avatar,
        }});

        return user;
    }
}

export { EditUserService };
import { User } from "../../models/User";

class DetailUserService {
    async execute(user_id: string) {
        const user = await User.findById(user_id);

        return {
            id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
        }
    }
}

export { DetailUserService };
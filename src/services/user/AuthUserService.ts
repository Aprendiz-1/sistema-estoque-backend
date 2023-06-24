import { compare } from "bcryptjs";
import { User } from "../../models/User";
import { sign } from "jsonwebtoken";

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({email, password}: AuthRequest) {
        const user = await User.findOne({email: email});

        if(!user) {
            throw new Error('Email/password incorrect!');
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error('Email/password incorrect!');
        }

        const token = sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '30d',
            }
        );

        return {
            id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            token: token,
        }
    }
}

export { AuthUserService };
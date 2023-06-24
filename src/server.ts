import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './db/mongoConnect';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.use('/uploads', express.static('tmp'));

connectDatabase();
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.',
    });
});

app.listen(4000, () => console.log('Server ativo :)'));
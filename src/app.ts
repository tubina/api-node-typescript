import express, {Request, Response, json} from 'express';
import router from './routes';
import cors from 'cors';

function createAppp() {

    const app = express();  
    app.use(express.json()); 
    app.use("/", router);

    const corsOptions = {
        origin: "http://localhost:3000",
        methods: ["GET"]
    }

    app.use(cors(corsOptions));

    return app;
}

export default createAppp;
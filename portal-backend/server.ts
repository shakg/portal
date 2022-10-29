import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:4200'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// Then pass these options to cors:
app.use(cors(options));

app.use(express.json());
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/company', (req: Request, res: Response) => {
    res.send({
        "id" : req.query.id,
        "name" : "ARG Yapı"
    });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
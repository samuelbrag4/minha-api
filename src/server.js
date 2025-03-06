import express from 'express';
import { config } from 'dotenv';
import movieRouter from './routes/movieRouter.js';

config();

const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use('/movies', movieRouter);

app.listen(port, () => {
    console.log(`🎞 3... 2... 1... AÇÃO! ${port} 🎞`);
});
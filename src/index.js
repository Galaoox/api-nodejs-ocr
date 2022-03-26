import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import indexRoutes from './routes/index.route';
import { PORT } from './config/env';

const app = express();

// Midlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/public', express.static('public'));

// Routes
app.use(indexRoutes);

// Config

const port = PORT || 3000 ;
app.listen(port, () => {
    console.log("Server run on port: ", port);
});
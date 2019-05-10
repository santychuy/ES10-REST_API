import express from 'express';
import morgan from 'morgan';

//Importing Routes
import IndexRoutes from './routes/index.routes';
import TaskRoutes from './routes/task.routes';

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use(IndexRoutes);
app.use('/task', TaskRoutes);

export default app;
import 'reflect-metadata';
import express from 'express';
import connectDB from './config/database';
import NodeRoutes from './routes/NodeRoutes';
import cors from 'cors';

import 'dotenv/config';
import { container } from 'tsyringe';
import { INoteRepository } from './repositories/INodeRepository';
import { MongooseNoteRepository } from './repositories/MongoNoteRepository';
import NoteService from './services/NodeService';

container.registerSingleton<INoteRepository>('INoteRepository', MongooseNoteRepository);
container.registerSingleton(NoteService);

const app = express();

connectDB();

app.use(cors({
  origin: '*'
}));

app.use(express.json());

app.use('/api', NodeRoutes);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

import { Router } from 'express';
import NoteController from '../controllers/NodeCrontroller';
import { container } from 'tsyringe';

import { MongooseNoteRepository } from '.././repositories/MongoNoteRepository';
import { INoteRepository } from '.././repositories/INodeRepository';

container.registerSingleton<INoteRepository>(
    'INoteRepository', 
    MongooseNoteRepository
);

const router = Router();
const noteController = container.resolve(NoteController);

router.get('/notes', noteController.getNotes.bind(noteController));
router.post('/notes', noteController.createNote.bind(noteController));
router.put('/notes/:id', noteController.updateNote.bind(noteController));
router.delete('/notes/:id', noteController.deleteNote.bind(noteController));
router.patch('/notes/:id/favorite', noteController.toggleFavorite.bind(noteController));
router.patch('/notes/:id/color', noteController.updateColor.bind(noteController));

export default router;
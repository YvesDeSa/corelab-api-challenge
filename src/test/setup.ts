import 'reflect-metadata';
import { container } from 'tsyringe';
import { createMockNoteRepository } from './mocks';
import NoteService from '../services/NodeService';

export const setupNoteServiceTest = () => {
  const mockNoteRepository = createMockNoteRepository();
  container.registerInstance('INoteRepository', mockNoteRepository);
  const noteService = container.resolve(NoteService);
  return { noteService, mockNoteRepository };
};

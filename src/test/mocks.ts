import { jest } from '@jest/globals';
import { INoteRepository } from '../repositories/INodeRepository';

export const createMockNoteRepository = (): jest.Mocked<INoteRepository> => ({
  getAllNotes: jest.fn(),
  getNoteById: jest.fn(),
  createNote: jest.fn(),
  updateNote: jest.fn(),
  deleteNote: jest.fn(),
  toggleFavorite: jest.fn(),
  updateColor: jest.fn(),
});

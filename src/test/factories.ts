import { INote } from "../repositories/INodeRepository";

export const createTestNote = (overrides?: Partial<INote>): INote => ({
  id: '1',
  title: 'Test Note',
  description: 'Test Description',
  favorite: false,
  color: '#ffffff',
  ...overrides,
});

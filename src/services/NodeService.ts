import { inject, injectable } from 'tsyringe';
import { INote, INoteRepository } from '../repositories/INodeRepository';

@injectable()
class NoteService {
  constructor(
    @inject('INoteRepository') private noteRepository: INoteRepository
  ) {}

  async getAllNotes(): Promise<INote[]> {
    return await this.noteRepository.getAllNotes();
  }

  async getNoteById(id: number): Promise<INote | null> {
    return await this.noteRepository.getNoteById(id);
  }

  async createNote(noteData: INote): Promise<INote> {
    return await this.noteRepository.createNote(noteData);
  }

  async updateNote(id: number, noteData: Partial<INote>): Promise<INote | null> {
    return await this.noteRepository.updateNote(id, noteData);
  }

  async deleteNote(id: number): Promise<void> {
    await this.noteRepository.deleteNote(id);
  }

  async toggleFavorite(id: number): Promise<INote | null> {
    return await this.noteRepository.toggleFavorite(id);
  }

  async updateColor(id: number, color: string): Promise<INote | null> {
    return await this.noteRepository.updateColor(id, color);
  }
}

export default NoteService;

import { injectable } from 'tsyringe';
import { INote, INoteRepository } from './INodeRepository';
import Note from '../model/NodeModel';

@injectable()
export class MongooseNoteRepository implements INoteRepository {
  async getAllNotes(): Promise<INote[]> {
    return await Note.find();
  }

  async getNoteById(id: string): Promise<INote | null> {
    return await Note.findById(id);
  }

  async createNote(noteData: INote): Promise<INote> {
    const note = new Note(noteData);
    return await note.save();
  }

  async updateNote(id: string, noteData: Partial<INote>): Promise<INote | null> {
    return await Note.findByIdAndUpdate(id, noteData, { new: true });
  }

  async deleteNote(id: string): Promise<void> {
    await Note.findByIdAndDelete(id);
  }

  async toggleFavorite(id: string): Promise<INote | null> {
    const note = await Note.findById(id);
    if (note) {
      note.favorite = !note.favorite;
      return await note.save();
    }
    return null;
  }

  async updateColor(id: string, color: string): Promise<INote | null> {
    const note = await Note.findById(id);
    if (note) {
      note.color = color;
      return await note.save();
    }
    return null;
  }
}

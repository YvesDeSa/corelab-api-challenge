export interface INote {
  id?: string;
  title: string;
  description: string;
  favorite: boolean;
  color: string;
}

export interface INoteRepository {
  getAllNotes(): Promise<INote[]>;
  getNoteById(id: string): Promise<INote | null>;
  createNote(noteData: INote): Promise<INote>;
  updateNote(id: string, noteData: Partial<INote>): Promise<INote | null>;
  deleteNote(id: string): Promise<void>;
  toggleFavorite(id: string): Promise<INote | null>;
  updateColor(id: string, color: string): Promise<INote | null>;
}

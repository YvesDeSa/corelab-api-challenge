export interface INote {
    id?: number;
    title: string;
    description: string;
    favorite: boolean;
    color: string;
  }
  
  export interface INoteRepository {
    getAllNotes(): Promise<INote[]>;
    getNoteById(id: number): Promise<INote | null>;
    createNote(noteData: INote): Promise<INote>;
    updateNote(id: number, noteData: Partial<INote>): Promise<INote | null>;
    deleteNote(id: number): Promise<void>;
    toggleFavorite(id: number): Promise<INote | null>;
    updateColor(id: number, color: string): Promise<INote | null>;
  }
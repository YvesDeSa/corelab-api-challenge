import mongoose, { Document, Schema } from 'mongoose';

export interface INote extends Document {
  title: string;
  description: string;
  favorite: boolean;
  color: string;
}

const NoteSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  favorite: { type: Boolean, default: false },
  color: { type: String, default: '#ffffff' },
});

const Note = mongoose.model<INote>('Note', NoteSchema);

export default Note;
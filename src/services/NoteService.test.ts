import 'reflect-metadata';
import { container } from 'tsyringe';
import NoteService from './NodeService';
import { INote, INoteRepository } from '../repositories/INodeRepository';
import { setupNoteServiceTest } from '../test/setup';


describe('NoteService', () => {
  let noteService: NoteService;
  let mockNoteRepository: jest.Mocked<INoteRepository>;

  beforeEach(() => {
    const setup = setupNoteServiceTest();
    noteService = setup.noteService;
    mockNoteRepository = setup.mockNoteRepository;
  });

  it('should retrieve all notes', async () => {
    const notes: INote[] = [
      { id: '1', title: 'Note 1', description: 'Description 1', favorite: false, color: '#ffffff' },
      { id: '2', title: 'Note 2', description: 'Description 2', favorite: true, color: '#ff0000' },
    ];
    mockNoteRepository.getAllNotes.mockResolvedValue(notes);

    const result = await noteService.getAllNotes();

    expect(result).toEqual(notes);
    expect(mockNoteRepository.getAllNotes).toHaveBeenCalledTimes(1);
  });

  it('should retrieve a note by ID', async () => {
    const note: INote = { id: '1', title: 'Note 1', description: 'Description 1', favorite: false, color: '#ffffff' };
    mockNoteRepository.getNoteById.mockResolvedValue(note);

    const result = await noteService.getNoteById('1');

    expect(result).toEqual(note);
    expect(mockNoteRepository.getNoteById).toHaveBeenCalledWith('1');
    expect(mockNoteRepository.getNoteById).toHaveBeenCalledTimes(1);
  });

  it('should create a new note', async () => {
    const noteData: INote = { id: '1', title: 'New Note', description: 'New Description', favorite: false, color: '#ffffff' };
    mockNoteRepository.createNote.mockResolvedValue(noteData);

    const result = await noteService.createNote(noteData);

    expect(result).toEqual(noteData);
    expect(mockNoteRepository.createNote).toHaveBeenCalledWith(noteData);
    expect(mockNoteRepository.createNote).toHaveBeenCalledTimes(1);
  });

  it('should update a note', async () => {
    const updatedNote: INote = { id: '1', title: 'Updated Note', description: 'Updated Description', favorite: true, color: '#0000ff' };
    mockNoteRepository.updateNote.mockResolvedValue(updatedNote);

    const result = await noteService.updateNote('1', { title: 'Updated Note', favorite: true });

    expect(result).toEqual(updatedNote);
    expect(mockNoteRepository.updateNote).toHaveBeenCalledWith('1', { title: 'Updated Note', favorite: true });
    expect(mockNoteRepository.updateNote).toHaveBeenCalledTimes(1);
  });

  it('should delete a note', async () => {
    await noteService.deleteNote('1');

    expect(mockNoteRepository.deleteNote).toHaveBeenCalledWith('1');
    expect(mockNoteRepository.deleteNote).toHaveBeenCalledTimes(1);
  });

  it('should toggle the favorite status of a note', async () => {
    const note: INote = { id: '1', title: 'Note 1', description: 'Description 1', favorite: true, color: '#ffffff' };
    mockNoteRepository.toggleFavorite.mockResolvedValue(note);

    const result = await noteService.toggleFavorite('1');

    expect(result).toEqual(note);
    expect(mockNoteRepository.toggleFavorite).toHaveBeenCalledWith('1');
    expect(mockNoteRepository.toggleFavorite).toHaveBeenCalledTimes(1);
  });

  it('should update the color of a note', async () => {
    const updatedNote: INote = { id: '1', title: 'Note 1', description: 'Description 1', favorite: false, color: '#00ff00' };
    mockNoteRepository.updateColor.mockResolvedValue(updatedNote);

    const result = await noteService.updateColor('1', '#00ff00');

    expect(result).toEqual(updatedNote);
    expect(mockNoteRepository.updateColor).toHaveBeenCalledWith('1', '#00ff00');
    expect(mockNoteRepository.updateColor).toHaveBeenCalledTimes(1);
  });
});

import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';
import NoteService from '../services/NodeService';
import { successResponse, errorResponse } from '../utils/ApiResponse';

@autoInjectable()
class NoteController {
  constructor(private noteService: NoteService) {}

  async getNotes(req: Request, res: Response): Promise<Response> {
    try {
      const notes = await this.noteService.getAllNotes();
      return successResponse(res, '✔️ Notes retrieved successfully', notes);
    } catch (error) {
      return errorResponse(res, '✖️ Error retrieving notes', error);
    }
  }

  async createNote(req: Request, res: Response): Promise<Response> {
    try {
      const note = await this.noteService.createNote(req.body);
      return successResponse(res, '✔️ Note created successfully', note, 201);
    } catch (error) {
      return errorResponse(res, '✖️ Error creating note', error);
    }
  }

  async updateNote(req: Request, res: Response): Promise<Response> {
    try {
      const note = await this.noteService.updateNote(req.params.id, req.body);
      return successResponse(res, '✔️ Note updated successfully', note);
    } catch (error) {
      return errorResponse(res, '✖️ Error updating note', error);
    }
  }

  async deleteNote(req: Request, res: Response): Promise<Response> {
    try {
      await this.noteService.deleteNote(req.params.id);
      return successResponse(res, '✔️ Note deleted successfully');
    } catch (error) {
      return errorResponse(res, '✖️ Error deleting note', error);
    }
  }

  async toggleFavorite(req: Request, res: Response): Promise<Response> {
    try {
      const note = await this.noteService.toggleFavorite(req.params.id);
      return successResponse(res, '✔️ Favorite status toggled successfully', note);
    } catch (error) {
      return errorResponse(res, '✖️ Error toggling favorite status', error);
    }
  }

  async updateColor(req: Request, res: Response): Promise<Response> {
    try {
      const note = await this.noteService.updateColor(req.params.id, req.body.color);
      return successResponse(res, '✔️ Color updated successfully', note);
    } catch (error) {
      return errorResponse(res, '✖️ Error updating color', error);
    }
  }
}

export default NoteController;

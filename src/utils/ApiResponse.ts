import { Response } from 'express';

const successResponse = (res: Response, message: string, data: any = {}, status: number = 200) => {
  return res.status(status).json({ message, data });
};

const errorResponse = (res: Response, message: string, error: any = {}, status: number = 500) => {
  return res.status(status).json({ message, error });
};

export { successResponse, errorResponse };

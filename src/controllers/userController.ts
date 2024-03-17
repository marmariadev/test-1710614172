import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const createUser = (req: Request, res: Response) => {
  // Validar la entrada aquí
  const user = userService.create(req.body);
  res.status(201).send(user);
};

export const getAllUsers = (req: Request, res: Response) => {
  const users = userService.findAll();
  res.status(200).send(users);
};

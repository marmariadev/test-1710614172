import { IUser } from '../interfaces/userInterface';

const users: IUser[] = []; // Simulando uma base de dados

export const create = (user: IUser): IUser => {
  user.id = new Date().valueOf(); // Simulando autoincrement
  users.push(user);
  return user;
};

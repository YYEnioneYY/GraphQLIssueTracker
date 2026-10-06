import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Danila',
    },
    {
      id: 2,
      name: 'Alex',
    },
  ];

  findOne(id: number): User | undefined {
    return this.users.find(
      (user) => user.id === id,
    );
  }

  findAll(): User[] {
    return this.users;
  }
}
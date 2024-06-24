import { Injectable } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];
  //elemento nuevo
  @ApiOperation({ summary: 'Buscar un usuario por nombre de usuario' })
  //fin del elemento nuevo
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

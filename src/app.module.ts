import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [TasksModule, FilesModule, AuthModule, UsersModule, FilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

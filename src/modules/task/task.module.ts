import { Module } from '@nestjs/common';
import { TaskService } from './application/services/task.service';
import { TaskController } from './presentation/controllers/task.controller';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}

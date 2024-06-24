import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('tasks') //tag for this controller
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  //lo nuevo integrado
  @ApiOperation({ summary: 'Obtener todas las tareas' })
  @ApiResponse({ status: 200, description: 'OK' })
  //termina lo integrado
  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTareaById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.tasksService.createTask(newTask.title, newTask.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
    return this.tasksService.updateTask(id, updatedFields);
  }
}

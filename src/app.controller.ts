import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('tasks') // سيصبح المسار /tasks
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllTasks() {
    return this.appService.getTasks();
  }
}
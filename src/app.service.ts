import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTasks() {
    return [
      { id: 1, title: 'Learn Nest.js', status: 'done' },
      { id: 2, title: 'Connect to Flutter', status: 'pending' },
    ];
  }
}
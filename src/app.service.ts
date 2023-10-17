import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloById(id: string): string {
    return 'Hello World! ' + id;
  }
}

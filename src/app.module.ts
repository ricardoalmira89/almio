import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ChatModule } from './chat.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ChatModule
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {
  constructor() {}

  public configure(consumer: MiddlewareConsumer): void {
    
  }
}

import { Module } from '@nestjs/common';
import { ChatGateway } from './gateway/chat.gateway';

@Module({
    providers: [ ChatGateway],
    exports: [ChatGateway]
})
export class ChatModule {}

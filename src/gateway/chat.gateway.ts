import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";

@WebSocketGateway({cors: true})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
 
  constructor(
  ){}

  @WebSocketServer()
  public server;

  async handleConnection() {
    console.log('connected');
  }
  async handleDisconnect() {}

  @SubscribeMessage("message")
  async onMessage(client, message) {
    this.server.emit("message", message);
  }


}

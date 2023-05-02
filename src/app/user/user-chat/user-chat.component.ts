import { Component } from '@angular/core';
import { ChatService } from 'src/app/service/chat-service/chat.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent {
  user:String='';
  room:String='';
  messageText:String='';
  messageArray:Array<{user:String,message:String}> = [];
  constructor(private _chatService:ChatService){
      this._chatService.newUserJoined()
      .subscribe(data=> this.messageArray.push(data));


      this._chatService.userLeftRoom()
      .subscribe(data=>this.messageArray.push(data));

      this._chatService.newMessageReceived()
      .subscribe(data=>this.messageArray.push(data));
  }

  join(){
      this._chatService.joinRoom({user:this.user, room:this.room});
  }

  leave(){
      this._chatService.leaveRoom({user:this.user, room:this.room});
  }

  sendMessage()
  {
      this._chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
  }
}

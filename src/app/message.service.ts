import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //initialize array
  messages: string[] = [];

  //Event to get string and add message into array
  add(message: string){
    this.messages.push(message);
  }
  
  //Event to clear the messages list
  clear(){
    this.messages = [];
  }
}

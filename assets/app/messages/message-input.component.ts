import { Message } from './message.model';
import { MessageService } from './message.service';
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms/forms";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent {
    constructor(private messageService: MessageService) { }
    onSubmit(form: NgForm){
      
       const message= new Message(form.value.content, 'Deegy');
        this.messageService.addMessage(message)
         .subscribe(
             data => console.log(data),
             error => console.error(error)
         );
        form.resetForm();
        
    }
   
}
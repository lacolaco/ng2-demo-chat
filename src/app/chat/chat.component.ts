import { Component, Directive, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { ChatService } from './chat.service';
import { Message } from './chat.model';
import { RandomMessage } from './utils/random-message';

@Directive({
    selector: '[chatMessage]'
})
class ChatMessage {
    @HostBinding('class.enter') enter: boolean;
    
    ngOnInit() {
        this.enter = true;
        setTimeout(() => {
            this.enter = false;
        }, 0);
    }
}

@Component({
    selector: 'chat',
    template: require('./chat.component.html'),
    directives: [
        MD_LIST_DIRECTIVES,
        ChatMessage,
    ],
    providers: [
        RandomMessage,
        ChatService,
    ],
    encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {

    messages:Message[] = [];

    constructor(private chat: ChatService) { }
    
    trackByID(index: number, item: Message) {
        return item.id;
    }

    ngOnInit() { 
        this.chat.messages.subscribe(message => {
           this.messages = [message].concat(this.messages); 
        });
    }

}
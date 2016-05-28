import { Injectable } from '@angular/core';

const MESSAGES = [
  'Hi',  
  'Hello :)',  
  'Hi all!',  
  'Hey!',  
  'Hello!',  
  'Hello guys',
  'How are you?',
  'Good morning',
  'lol',
  ':)',
  '🍣',
  '🎉',
  'Yay',
  'Hi all',
  'I\'m here',
  'What\'s up?',
];


@Injectable()
export class RandomMessage {
    
    get() {
        return MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    }

}


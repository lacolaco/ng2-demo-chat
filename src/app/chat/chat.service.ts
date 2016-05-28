import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';

import { Message } from './chat.model';
import { RandomMessage } from './utils/random-message';
import { namenize } from './utils/name';

@Injectable()
export class ChatService {

    private messages$: Subject<Message>;

    constructor(private http: Http, private randomMessage: RandomMessage) {
        this.messages$ = new Subject<Message>();
        Observable.timer(0, 3000)
            // .take(5)
            .delayWhen(_ => Observable.interval(Math.random() * 10000))
            .switchMap(_ => {
                return this.http.get('https://randomuser.me/api/')
            })
            .map(resp => resp.json())
            .subscribe((data: any) => {
                const user = data.results[0];
                this.messages$.next({
                    id: Date.now(),
                    name: namenize(user.name.first),
                    image: user.picture.thumbnail,
                    message: this.randomMessage.get()
                });
            }, error => {
                console.error(error);
            });
    }
    
    get messages(): Observable<Message> {
        return this.messages$.asObservable();
    }
    
}
import { Injectable } from '@angular/core';
import { Observable, Subject  } from 'rxjs';


interface Message{
  Message:string;
}


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  public messageSubject=new Subject<Message>();
  message$:Observable<Message>=this.messageSubject.asObservable();
}

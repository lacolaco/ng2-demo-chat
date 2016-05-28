import 'rxjs/Rx'; // load the full rxjs

import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdToolbar } from '@angular2-material/toolbar';

import { ChatComponent } from './chat';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    directives: [
      MD_SIDENAV_DIRECTIVES,
      MD_LIST_DIRECTIVES,
      MdToolbar,
      MdButton,
      MdIcon,
      ChatComponent,
    ],
    providers: [
      HTTP_PROVIDERS,
      MdIconRegistry
    ],
    styles: []
})
export class AppComponent {}
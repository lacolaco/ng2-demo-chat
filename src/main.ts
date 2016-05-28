import 'core-js/shim';
import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app';

// enableProdMode();

bootstrap(AppComponent, [
])
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));

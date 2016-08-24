import 'es6-shim';
import 'es6-promise';
import 'zone.js/dist/zone';
import 'reflect-metadata';
// importing my vendor and polyfiils directly in the main.ts


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);

"use strict";
require('es6-shim');
require('es6-promise');
require('zone.js/dist/zone');
require('reflect-metadata');
// importing my vendor and polyfiils directly in the main.ts
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map
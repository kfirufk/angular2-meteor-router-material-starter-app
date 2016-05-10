/**
 * Created by ufk on 5/10/16.
 */
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component,provide} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes} from '@angular/router';

import {MdToolbar} from '@angular2-material/toolbar';

import {Welcome} from './imports/pages/welcome/welcome';
import {Statistics} from './imports/pages/statistics/statistics';


@Component({
    selector: 'app',
    templateUrl: 'client/app.html',
    directives: [ROUTER_DIRECTIVES,MdToolbar],
    providers: [ROUTER_PROVIDERS,provide(APP_BASE_HREF, { useValue: '/' })]
})
@Routes([
 { path: '/', component: Welcome },
 {path: '/statistics',component:Statistics}  
])
class BingoDriveStatisticsApp {
    
}

bootstrap(BingoDriveStatisticsApp);
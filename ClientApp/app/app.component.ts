import { Title } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from './shared/services/data.service';
//import { SecurityService } from './shared/services/security.service';
import { ConfigurationService } from './shared/services/configuration.service';


@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

/*
export class AppComponent {
   
}
*/

export class AppComponent implements OnInit {
    Authenticated: boolean = false;
    subscription: Subscription;

    /*
    constructor(private titleService: Title, private securityService: SecurityService, private configurationService: ConfigurationService) {
        this.Authenticated = this.securityService.IsAuthorized;
    }
    */

    constructor(private titleService: Title, private configurationService: ConfigurationService) {
       
    }

    ngOnInit() {
        //console.log('-------------------------app on init-------------------------');
        //this.subscription = this.securityService.authenticationChallenge$.subscribe(res => this.Authenticated = res);

        //Get configuration from server environment variables:
        console.log('--------------------------configurationload--------------------------');
        this.configurationService.load();
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle('SNOW.SHOP.APP');
    }
}

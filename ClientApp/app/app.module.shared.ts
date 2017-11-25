import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';

import { routing } from './app.routes';
import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { CatalogAttributesModule } from './catalog/catalogAttributes/catalogAttributes.module';

/*
// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
*/


@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        //MaterialModule,
        BrowserAnimationsModule,
       
        /*
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        */
        routing,
        //BaseFrameModule,
        LayoutModule,
        DashboardModule,


        HttpModule,
        //AppRoutingModule,
        // Only module that app module loads
        SharedModule.forRoot(),
        CatalogAttributesModule,
        
    ],
    
    providers: [
        AppService
    ],
    
})
export class AppModuleShared {
}

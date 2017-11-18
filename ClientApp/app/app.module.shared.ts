import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { routing } from './app.routes';
import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { CatalogAttributesModule } from './catalog/catalogAttributes/catalogAttributes.module';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        routing,
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

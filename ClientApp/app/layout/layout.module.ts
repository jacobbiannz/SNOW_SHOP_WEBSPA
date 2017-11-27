import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [
        SidebarComponent,
        HeaderComponent
    ],
    exports: [
        
        SidebarComponent,
        HeaderComponent
    ]
})
export class LayoutModule {}

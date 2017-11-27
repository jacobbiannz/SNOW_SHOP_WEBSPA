import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogAttributesComponent } from './catalog/catalogAttributes/catalogAttributes.component';

/*
import { BasketComponent } from './basket/basket.component';
import { CatalogComponent } from './catalog/catalog.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersDetailComponent } from './orders/orders-detail/orders-detail.component';
import { OrdersNewComponent } from './orders/orders-new/orders-new.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignsDetailComponent } from './campaigns/campaigns-detail/campaigns-detail.component';
*/

export const routes: Routes = [
    //{ path: '', loadChildren: 'app/layout/layout.module#LayoutModule', },
    //{ path: '', loadChildren: './catalog/catalogAttributes/catalogAttributes.module#CatalogAttributesModule', },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'catalogattributes', component: CatalogAttributesComponent },

    //{ path: '', redirectTo: 'catalogattributes', pathMatch: 'full' },
    //{ path: 'catalogattributes', component: CatalogAttributesComponent }
/*
    { path: 'basket', component: BasketComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'orders/:id', component: OrdersDetailComponent },
    { path: 'order', component: OrdersNewComponent },
    { path: 'campaigns', component: CampaignsComponent },
    { path: 'campaigns/:id', component: CampaignsDetailComponent }

*/
];

export const routing = RouterModule.forRoot(routes);

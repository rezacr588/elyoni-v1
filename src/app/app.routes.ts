import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AboutComponent } from './pages/about/about.component';
import { SourcingComponent } from './pages/sourcing/sourcing.component';
import { TradeComponent } from './pages/trade/trade.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'sourcing', component: SourcingComponent },
    { path: 'trade', component: TradeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products/:categoryType', component: ProductsComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

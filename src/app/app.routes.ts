import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { FoodDetailComponent } from './pages/food-detail/food-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'foods', component: FoodListComponent},
    {path: 'foods/:id', component: FoodDetailComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: PageNotFoundComponent},
];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { FoodDetailComponent } from './pages/food-detail/food-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'foods', component: FoodListComponent},
    {path: 'foods/:id', component: FoodDetailComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: PageNotFoundComponent},
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { ChooseComponent } from './choose/choose.component';
import { HowWorksComponent } from './how-works/how-works.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'choose', component: ChooseComponent },
  { path: 'how-works', component: HowWorksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

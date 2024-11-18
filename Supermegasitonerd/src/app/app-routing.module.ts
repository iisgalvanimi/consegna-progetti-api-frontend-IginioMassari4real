import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailComponent } from './card-detail/card-detail.component';

const routes: Routes = [
  { path: 'card1', component: CardDetailComponent, data: { cardId: 'jeweled-lotus' }},
  { path: 'card2', component: CardDetailComponent, data: { cardId: 'black-lotus' }},
  { path: 'card3', component: CardDetailComponent, data: { cardId: 'time-walk' }},
  { path: 'card4', component: CardDetailComponent, data: { cardId: 'mox-emerald' }},
  { path: 'card5', component: CardDetailComponent, data: { cardId: 'ancestral-recall' }},
  { path: '', redirectTo: '/card1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
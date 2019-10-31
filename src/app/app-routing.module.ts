import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartyComponent } from './party/party.component';

const routes: Routes = [
  { path: 'pt/:id', component: PartyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

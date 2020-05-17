import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: ':titel', component: AppComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/Vorwort%20von%20Herrn%20Brand%20',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

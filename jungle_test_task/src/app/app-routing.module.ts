import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {RepositoriesComponent} from "./components/repositories/repositories.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'repos', component: RepositoriesComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

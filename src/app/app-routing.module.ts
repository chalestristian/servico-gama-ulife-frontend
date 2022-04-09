import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { GuardConfigGuard } from './guard/guard-config.guard';

const routes: Routes = [
  { path: "", component: ExampleComponent, canActivate:[GuardConfigGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

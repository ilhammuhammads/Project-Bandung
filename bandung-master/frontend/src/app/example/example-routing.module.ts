import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleComponent } from '@app/example/example.component';
import { ExampleChildComponent } from '@app/example/example-child/example-child.component';

const routes: Routes = [
  { path: 'example', component: ExampleComponent },
  { path: 'example/:id', component: ExampleChildComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ExampleRoutingModule } from '@app/example/example-routing.module';
import { ExampleComponent } from '@app/example/example.component';
import { ExampleChildComponent } from '@app/example/example-child/example-child.component';
import { ExampleService } from '@app/example/example.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../shared/app-material.module';

@NgModule({
  declarations: [ExampleComponent, ExampleChildComponent],
  imports: [CommonModule, HttpClientModule, ExampleRoutingModule,
    FlexLayoutModule, AppMaterialModule],
  providers: [ExampleService]
})
export class ExampleModule {}

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './shared/app-material.module';
import { AppComponent } from './app.component';

import { ExampleModule } from '@app/example/example.module';

import { MembersModule } from './members/members.module';
import { BooksModule } from './books/books.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExampleModule,
    MembersModule,
    BooksModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

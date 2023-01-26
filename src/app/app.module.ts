import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule } from '@angular/router';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    EmployeeListComponent,
    AnimalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
// CLI adds AppRoutingModule to the AppModule's imports array
    RouterModule.forRoot([
      {path:'itemList', component: ItemListComponent},
      {path:'employeeList', component: EmployeeListComponent}
    ]), 
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

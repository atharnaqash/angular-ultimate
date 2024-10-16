import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {InzaFormComponent} from './admin/components/inza-form/inza-form.component';
import { AppComponent } from './app.component';
import { InzaListComponent } from './admin/containers/inza-list/inza-list.component';
import { ItemSingleComponent } from './admin/containers/item-single/item-single.component';
import { AdminComponent } from './admin/admin.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    InzaListComponent,
    ItemSingleComponent,
    AdminComponent,
    InzaFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

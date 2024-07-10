import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {InzaFormComponent} from './admin/components/inza-form/inza-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InzaListComponent } from './admin/containers/inza-list/inza-list.component';
import { ItemSingleComponent } from './admin/containers/item-single/item-single.component';
import { AdminComponent } from './admin/admin.component';


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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

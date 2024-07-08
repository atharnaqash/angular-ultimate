import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {InzaFormComponent} from './admin/components/inza-form/inza-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InzaComponent } from './inza/inza.component';
import { ItemCardComponent } from './inza/components/item-card/item-card.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    InzaComponent,
    ItemCardComponent,
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

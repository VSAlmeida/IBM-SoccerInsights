import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { 
  FormsModule, 
  ReactiveFormsModule
} from '@angular/forms';

import { 
  MatSidenavModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule
} from '@angular/material';

 
import { AppComponent } from './app.component';
import { TwitterComponent } from './twitter/twitter.component';
import { ObjectstorageComponent } from './objectstorage/objectstorage.component';
import { NluComponent } from './nlu/nlu.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import { NluService } from './nlu.service';
import { TwitterService } from './twitter.service';
import { ObjectstorageService } from './objectstorage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
    ObjectstorageComponent,
    NluComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatNativeDateModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [
    TwitterService,
    ObjectstorageService,
    NluService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


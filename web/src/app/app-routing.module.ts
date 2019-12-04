import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwitterComponent } from './twitter/twitter.component';
import { ObjectstorageComponent } from './objectstorage/objectstorage.component';
import { NluComponent } from './nlu/nlu.component';

const routes: Routes = [
  { path: 'nlu', component: NluComponent },
  { path: 'twitter', component: TwitterComponent },
  { path: 'object', component: ObjectstorageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

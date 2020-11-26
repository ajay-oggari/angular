import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConceptsComponent } from './concepts/concepts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'concepts', component: ConceptsComponent},
{path:  'contacts', component: ContactsComponent},
{path: 'about', component: AboutComponent}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

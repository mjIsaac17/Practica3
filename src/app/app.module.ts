import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'; 

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule ,
  MatCardModule,
} from '@angular/material';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { FitnessComponent } from './components/fitness/fitness.component';

const appRoutes: Routes = [
  {path: 'videojuegos', component: VideojuegosComponent},
  {path: 'fitness', component: FitnessComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavBarComponent,
    VideojuegosComponent,
    FitnessComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

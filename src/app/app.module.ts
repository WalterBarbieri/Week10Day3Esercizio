import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';
import { CustomComponent } from './components/custom/custom.component';



const routes: Route[] = [ // Creazione di una costante basata sull'interfaccia Route che contiene i percorsi di attivazione dei componenti
    {
        path: '', // Percorso che sarà indicato nel link
        component: HomeComponent // Componente che si attiverà al click sul link
    },
    {
        path: 'postAttivi',
        component: PostAttiviComponent
    },
    {
        path: 'postInattivi',
        component: PostInattiviComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    CustomComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

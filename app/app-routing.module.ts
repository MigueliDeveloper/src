
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { AlumnoComponent } from './alumno/alumno.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'alumno', component: AlumnoComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingProviders: any[] = [];
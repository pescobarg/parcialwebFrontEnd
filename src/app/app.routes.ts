import { Routes } from '@angular/router';
import { CrearContratosComponent } from './componentes/crear-contratos/crear-contratos.component';
import { MostrarContratosComponent } from './componentes/mostrar-contratos/mostrar-contratos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'crear-contrato', pathMatch: 'full' },
    { path: 'crear-contrato', component: CrearContratosComponent },
    { path: 'mostrar-contrato', component: MostrarContratosComponent },

];

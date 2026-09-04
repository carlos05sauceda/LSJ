import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'Home',
        loadComponent: () =>
            import('./pages/home/home').then((m) => m.Home)
    },

    {
        path: 'oferta-academica',
        loadComponent: () =>
            import('./pages/oferta-academica/oferta-academica')
                .then((m) => m.OfertaAcademica)
    },

    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    }
];

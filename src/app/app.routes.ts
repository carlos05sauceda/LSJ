import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'Home',
        loadComponent: () =>
            import ('./pages/home/home').then ((m) => m.Home)
    },

     {
        path: 'Institucional',
        loadComponent: () =>
            import ('./pages/institucional/institucional').then ((m) => m.Institucional)
    },

    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    }
];

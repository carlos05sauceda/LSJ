import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'Home',
        loadComponent: () =>
            import ('./pages/home/home').then ((m) => m.HomeComponent)
    },

     {
        path: 'Institucional',
        loadComponent: () =>
            import ('./pages/institucional/institucional').then ((m) => m.Institucional)
    },

     {
    path: 'OfertaAcademica',
    loadComponent: () =>
      import('./pages/oferta-academica/oferta-academica')
        .then((m) => m.OfertaAcademica)
  },

  {
    path: 'Galeria',
    loadComponent: () =>
      import('./pages/galeria/galeria')
        .then((m) => m.Galeria)
  },

   {
    path: 'Contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto')
        .then((m) => m.Contacto)
  },

    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    }
];

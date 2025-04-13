import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/user-list/user-list.component').then(
        (m) => m.UserListComponent
      ),
  },
  {
    path: 'user/:id',
    loadComponent: () =>
      import('./components/user-details/user-details.component').then(
        (m) => m.UserDetailsComponent
      ),
  },
];

import { Routes } from '@angular/router';
import { LibraryPage } from './pages/library/library.page';
import { SigninPage } from './pages/public/sign-in/sign-in.page';
import { PasswordResetPage } from './pages/public/password-reset/password-reset.page';
import { SupportPage } from './pages/public//support/support.page';
import { MaintenancePage } from './pages/public/errors/maintenance/maintenance.page';
import { NotFoundPage } from './pages/public/errors/not-found/not-found.page'; 

export const routes: Routes = [
  { path: 'library', component: LibraryPage },
  { path: '', redirectTo: 'library', pathMatch: 'full' },
  { path: 'sign-in', component: SigninPage },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'password-reset', component: PasswordResetPage },
  { path: '', redirectTo: 'password-reset', pathMatch: 'full' },
  { path: 'support', component: SupportPage },
  { path: 'maintenance', component: MaintenancePage },
  { path: 'not-found', component: NotFoundPage },
  { path: '**', component: NotFoundPage }
];

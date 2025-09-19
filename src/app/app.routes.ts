import { Routes } from '@angular/router';
import { LibraryPage } from './pages/library/library.page';
import { SigninPage } from './pages/public/sign-in/sign-in.page';
import { PasswordResetPage } from './pages/public/password-reset/password-reset.page';
import { RequestDemoPage } from './pages/public/request-demo/request-demo.page';
import { DashboardPage } from './pages/protected/dashboard/dashboard.page';

export const routes: Routes = [
  { path: 'library', component: LibraryPage },
  { path: '', redirectTo: 'library', pathMatch: 'full' },
  { path: 'sign-in', component: SigninPage },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'password-reset', component: PasswordResetPage },
  { path: '', redirectTo: 'password-reset', pathMatch: 'full' },
  { path: 'request-demo', component: RequestDemoPage },
  { path: '', redirectTo: 'request-demo', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPage },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

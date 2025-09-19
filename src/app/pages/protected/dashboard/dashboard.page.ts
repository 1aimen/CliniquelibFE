import { Component } from '@angular/core';
import { LayoutMiniSidebarComponent } from '../../../components/layout/mini-sidebar/mini-sidebar.component';
import { HeaderComponent } from '../../../components/layout/header/header.component';

@Component({
  selector: 'dashboard-page',
  standalone: true,
  imports: [LayoutMiniSidebarComponent, HeaderComponent],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  // ...
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TooltipModule, IconModule, ButtonModule, DialogModule } from 'carbon-components-angular';

@Component({
  selector: 'app-mini-sidebar',
  standalone: true,
  imports: [TooltipModule, IconModule, ButtonModule, RouterModule, DialogModule],
  templateUrl: './mini-sidebar.component.html',
  styleUrls: ['./mini-sidebar.component.scss'],
})
export class LayoutMiniSidebarComponent implements OnInit {
  @Output() itemClick: EventEmitter<any> = new EventEmitter();

  public notifications = [
    {
      level: 'bug',
      text: 'Failed to get shared datastores in kubernetes cluster',
      date: '20m',
    },
    {
      level: 'bug',
      text: 'Update storage nodeAffinity check to use node object',
      date: '3h',
    },
    {
      level: 'feature',
      text: 'Provide OIDC authentication token to kubectl without leaking',
      date: '5h',
    },
    {
      level: 'accept',
      text: 'vSphere does not detach volumes if "VM not found" error',
      date: '12h',
    },
    {
      level: 'default',
      text: 'Kubectl wait for multiple conditions',
      date: '12h',
    },
    {
      level: 'bug',
      text: 'apiserver fails with disable_ipv6 at runtime',
      date: '3h',
    },
    {
      level: 'accept',
      text: 'Validation error with CRDs using scale subresource',
      date: '12h',
    },
    {
      level: 'accept',
      text: 'Allow passing parameters in probe requests',
      date: '12h',
    },
  ];

  public messages = [
    {
      avatar: 'assets/img/avatar/avatar2.jpg',
      name: 'John Belinda',
      text: 'Cannot start service web: mount source path issue',
      date: '5 mins ago',
      read: false,
    },
    {
      avatar: 'assets/img/avatar/avatar3.jpg',
      name: 'Reta Collen',
      text: 'Automate update of compose spec from docker-compose',
      date: '1 hour ago',
      read: false,
    },
    {
      avatar: 'assets/img/avatar/avatar6.jpg',
      name: 'Elizabeth Mozelle',
      text: 'Config entries named by content hash',
      date: '5 hours ago',
      read: true,
    },
    {
      avatar: 'assets/img/avatar/avatar7.jpg',
      name: 'Marys Rob',
      text: 'Breaking Changes with External Secrets',
      date: '1 day ago',
      read: true,
    },
    {
      avatar: 'assets/img/avatar/avatar8.jpg',
      name: 'Adoree Morgan',
      text: 'Inconsistent cpus value type in config',
      date: '3 days ago',
      read: true,
    },
  ];

  public loading = false;

  constructor() {}

  ngOnInit(): void {}

  onItemClick(event: any) {
    this.itemClick.emit(event);
  }

  onFakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}

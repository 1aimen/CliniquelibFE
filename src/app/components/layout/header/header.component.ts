import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  ButtonModule,
  CheckboxModule,
  DialogModule,
  HeaderModule,
  IconModule,
  InputModule,
  LoadingModule,
  MenuButtonModule,
  PanelModule,
  SideNavModule,
} from 'carbon-components-angular';
import { ContextMenuModule } from 'carbon-components-angular/context-menu';
import { ThemeDirective } from 'carbon-components-angular'; // Correctly importing ThemeDirective

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
    DialogModule,
    MenuButtonModule,
    IconModule,
    LoadingModule,
    ContextMenuModule,
    CheckboxModule,
    HeaderModule,
    PanelModule,
    SideNavModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  expanded($event: PointerEvent) {
    throw new Error('Method not implemented.');
  }
  // No need for a constructor to inject ThemeDirective
  constructor() {
    // Constructor logic here
  }
}

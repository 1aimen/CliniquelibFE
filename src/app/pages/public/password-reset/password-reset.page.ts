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
  Checkbox,
  CheckboxModule,
  DialogModule,
  IconModule,
  IconService,
  InputModule,
  Label,
  Loading,
  LoadingModule,
  MenuButtonModule,
} from 'carbon-components-angular';
import { ContextMenuModule } from 'carbon-components-angular/context-menu';
import { TranslationComponent } from '../../../components/shared/translation/translation.component';

@Component({
  selector: 'password-reset-page',
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
    TranslationComponent,
  ],
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage {
  // ...
}

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

@Component({
  selector: 'translation-component',
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
  ],
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
})
export class TranslationComponent {
  // ...
}

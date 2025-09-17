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
import { ButtonModule, DialogModule, IconModule, IconService, InputModule, Label, Loading, LoadingModule, MenuButtonModule } from 'carbon-components-angular';
import { ContextMenuModule } from "carbon-components-angular/context-menu";

@Component({
  selector: 'library-page',
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
    ContextMenuModule
],
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage {

    // ...


}

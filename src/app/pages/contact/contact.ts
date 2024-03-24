import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Header } from '../../components/header';

@Component({
  selector: 'ablemarle-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, Header],
  templateUrl: './contact.html',
})
export class Contact {}

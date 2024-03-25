import { Component, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Header } from '../../components/header';
import { CommonModule } from '@angular/common';
import { HttpStatusCode } from '@angular/common/http';
import emailJs from '@emailJs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ablemarle-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    Header,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  templateUrl: './contact.html',
  styles: [
    `
      .error {
        font-weight: bold;
        font-size: 12px;
        color: red;
      }
    `,
  ],
})
export class Contact {
  public contactForm!: FormGroup;
  public isSending = signal<boolean>(false);

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$')]],
      date: [new Date().toDateString(), Validators.required],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(5000),
        ],
      ],
    });
  }

  isInputValid(controlName: string, errorName: string): boolean {
    if (
      this.contactForm.controls[controlName]?.touched &&
      this.contactForm.controls[controlName]?.hasError(errorName)
    ) {
      return true;
    }
    return false;
  }

  async onSubmit(): Promise<void> {
    if (!this.contactForm.valid) {
      this.toastr.error('Please fill all the fields');
      return;
    }
    try {
      this.isSending.set(true);
      const response = await emailJs.send(
        'service_qzft4dg',
        'template_ojn12rc',
        {
          to_name: 'Specialized Orthopedic Surgeons',
          ...this.contactForm.value,
        },
        'S8QJQci9NComKenmu'
      );
      if (response.status != HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.error(
          'Something unexpected happened while sending the message.Please try again.'
        );
        return;
      }
      if (response.status == HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.success(
          `We have received your message ${this.contactForm.value.name}. Thanks for contacting us.`
        );
        this.contactForm.reset({
          name: '',
          email: '',
          date: new Date().toDateString(),
          phone: '',
          message: '',
        });
        return;
      }
    } catch (error: any) {
      if (error?.status != HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.error('Message not sent. Try again.');
        return;
      }
    }
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'Contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contacto {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

 
  private accessKey = '3aac62ed-df55-4e43-a02f-89d41764f2a8'; 

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  responseMessage = '';

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.pattern('^[0-9+\\s-]{8,15}$')]], 
    message: ['', [Validators.required, Validators.minLength(20)]]
  });

  
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const payload = {
      access_key: this.accessKey,
      subject: 'Nuevo Mensaje del Formulario Web',
      ...this.contactForm.value
    };

    this.http.post<{ success: boolean; message: string }>('https://api.web3forms.com/submit', payload)
      .subscribe({
        next: (response) => {
          this.isSubmitting = false;
          if (response.success) {
            this.submitSuccess = true;
            this.responseMessage = '¡Mensaje enviado con éxito! Te responderemos pronto.';
            this.contactForm.reset();
          } else {
            this.submitError = true;
            this.responseMessage = 'Hubo un problema al enviar el mensaje. Intenta de nuevo.';
          }
        },
        error: () => {
          this.isSubmitting = false;
          this.submitError = true;
          this.responseMessage = 'Ocurrió un error de conexión. Por favor intenta más tarde.';
        }
      });
  }
}

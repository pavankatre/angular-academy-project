import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule , CommonModule, MatCardModule, MatFormFieldModule, MatInputModule , MatButtonModule , RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


    registerForm: FormGroup | any;
  
    constructor(private fb: FormBuilder) { }
  
    ngOnInit(): void {
      this.registerForm = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
      });
    }
  
    onSubmit(): void {
      if (this.registerForm.valid) {
        console.log(this.registerForm.value);
        // Handle registration logic
      }
    }
  }
  

















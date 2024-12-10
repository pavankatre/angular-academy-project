import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
 import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterLink , Router} from '@angular/router';
import { login } from '../../../core/models/classes/login';
import { ILogin } from '../../../core/interceptors/ILogin';
import { StorageService } from '../../../core/services/storage/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  //loginForm: FormGroup | login = new login;
  loginForm:ILogin|FormGroup |any;
  


  constructor(private fb: FormBuilder , private storageSer : StorageService ,private router : Router ) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(): void {
  
    if (this.loginForm.valid) {
      console.log(this.loginForm.value); // Handle login logic } }
      this.router.navigate(['/admin']);
      this.storageSer.saveUser(this.loginForm.value);


    }
  }
}

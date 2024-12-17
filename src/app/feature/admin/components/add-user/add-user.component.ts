// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-add-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './add-user.component.html',
//   styleUrl: './add-user.component.scss'
// })
// export class AddUserComponent {




  
// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  userTypes = ['Admin', 'Trainee', 'Coordinator', 'Student'];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      userType: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Additional fields will be added dynamically based on user type
    });
  }

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges(): void {
    this.userForm.get('userType')?.valueChanges.subscribe(value => {
      this.updateFormFields(value);
    });
  }

  updateFormFields(userType: string): void {
    // Remove all additional controls before adding new ones
    const controlsToRemove = ['department', 'course', 'batch'];
    controlsToRemove.forEach(control => {
      if (this.userForm.contains(control)) {
        this.userForm.removeControl(control);
      }
    });

    // Add controls based on selected user type
    switch (userType) {
      case 'Admin':
        this.userForm.addControl('department', this.fb.control('', Validators.required));
        break;
      case 'Trainee':
        this.userForm.addControl('course', this.fb.control('', Validators.required));
        break;
      case 'Coordinator':
        this.userForm.addControl('batch', this.fb.control('', Validators.required));
        break;
      case 'Student':
        this.userForm.addControl('course', this.fb.control('', Validators.required));
        this.userForm.addControl('batch', this.fb.control('', Validators.required));
        break;
      default:
        break;
    }
  }

  onSubmit(): void {
    console.log(this.userForm.value);
  }
}

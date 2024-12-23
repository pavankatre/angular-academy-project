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



import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { UserCostants } from '../../../../core/constants/UserConstants';
import { StorageService } from '../../../../core/services/storage/storage.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUsers: FormGroup;
  selectedFile: any = null;
  maxDOB: Date ;
 

  selectedUserType = signal('')
  userTypes = signal(UserCostants.userType);

  qualifications = signal(UserCostants.userQualifications);

  constructor(private fb: FormBuilder , private storageService : StorageService) {
     this.maxDOB = new Date();
// this.maxDOB = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

    this.addUsers = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      middleName: [''],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      userEmail: ['', Validators.compose([Validators.required, Validators.email])],
      userType: ['', Validators.required],
      userGender: ['', Validators.required],
      userDOB: ['', Validators.required],
      userQualification: ['', Validators.required],
      mobileNumber: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$'), Validators.maxLength(10)])],
      userAddress: ['', Validators.required],
      userExperience: ['', Validators.required],
      userProfilePhoto: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.maxDOB = new Date();
  }



  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    this.addUsers.value.userProfilePhoto = this.selectedFile;
    if(event.target.files[0]){
      this.addUsers.get('userProfilePhoto')?.clearValidators();
      this.addUsers.get('userProfilePhoto')?.updateValueAndValidity();
    }


  }
  saveUser() {
    debugger
    if (this.addUsers.valid) {
    if(this.addUsers.value.userType==="Student"){
    this.addUsers.value.userProfilePhoto="";
    this.addUsers.value.userExperience="";    }
      console.log(this.addUsers.value)
      const loginID =this.storageService.getUser().email;
      console.log(loginID);
      this.addUsers.value.addedBy = loginID;
      this.storageService.addUser(this.addUsers.value);
    }
  }
  onUserTypeSelected(event: any) {

    this.selectedUserType.set(event.value);
    const userExperienceControl = this.addUsers.get('userExperience');
    const userProfilePhotoControl = this.addUsers.get('userProfilePhoto');
    if (event.value === 'Student') {
      userExperienceControl?.clearValidators();
      userExperienceControl?.updateValueAndValidity();
      userProfilePhotoControl?.clearValidators();
      userProfilePhotoControl?.updateValueAndValidity();
    }
    else {
      userExperienceControl?.setValidators([Validators.required]);
      userExperienceControl?.updateValueAndValidity();
      userProfilePhotoControl?.setValidators([Validators.required]);
      userProfilePhotoControl?.updateValueAndValidity();
    }
  }

  resteUserForm() {
    this.addUsers.reset()


  }
}

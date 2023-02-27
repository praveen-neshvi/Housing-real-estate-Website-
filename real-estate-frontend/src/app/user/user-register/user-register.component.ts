import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{

  registerationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}    //Using Form Builder, optimal way of using reactive forms

  ngOnInit(): void {
      // this.registerationForm = new FormGroup(
      //   {
      //     userName: new FormControl(null, Validators.required),
      //     email: new FormControl(null, [Validators.required, Validators.email]),
      //     password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      //     confirmPassword: new FormControl(null, [Validators.required]),
      //     mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
      //   }, this.passwordMatchingValidator );
      this.createRegistartionForm();
  }


  createRegistartionForm() {
    this.registerationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, {Validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fg: AbstractControl) : ValidationErrors | null {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null :
    {notmatched: true};
  }

  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }

  onSubmit(){
    console.log(this.registerationForm)
  }
}

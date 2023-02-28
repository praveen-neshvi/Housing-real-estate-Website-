import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{

  user!: User;
  registerationForm!: FormGroup;
  userSubmitted : boolean = false;  //later change this when user credentials get pushed into the database

  constructor(
    private fb: FormBuilder,
    private alertify: AlertifyService,
    private userService : UserService
    ) {}    //Using Form Builder, optimal way of using reactive forms

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
    console.log(this.registerationForm);
    this.userSubmitted = true;

    if(this.registerationForm.valid){
      // this.user = Object.assign(this.user, this.registerationForm.value)

      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted = false;
      this.alertify.success("Congrats, you are successfully registered");
    }
    else{
      this.alertify.error("Kindly provide required fields");
    }

    // this.userSubmitted = false;

  }

  userData(): User{
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }


}

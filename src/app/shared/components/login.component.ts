import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationService } from "../services/authentication.service";
import { IUser } from "../models/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  showModal: boolean;
  loginForm: FormGroup;
  loading: boolean = false;
  submitted = false;
  errorMessage: string;
  isLoggedIn : boolean = false;
  currentUser: IUser;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUser) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.isLoggedIn = true;
      //this.router.navigate(["/"]);
    }
    else{
      this.isLoggedIn = false;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });

    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log("submitted");
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log("invalid");
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.f.username.value, this.f.password.value)
      .subscribe(
        (data) => {
          if (data && data.token) {
            this.isLoggedIn = true;
            this.hide();
            console.log(JSON.stringify(data));
            // this.router.navigate([this.returnUrl]);
          }
        },
        (error) => {
          // this.alertService.error(error);
          this.errorMessage = error;
          console.log(error);
          this.loading = false;
        }
      );
  }

  logout(){
    this.authenticationService.logout();
    this.isLoggedIn = false;
    window.location.reload();
  }

  show() {
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
  }
}

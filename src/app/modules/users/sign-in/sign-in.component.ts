import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup = new FormGroup({
    username: new FormControl(null, []),
    password: new FormControl(null, []),
  });

  constructor(private router: Router) {}
  ngOnInit(): void {}

  async handleSubmitForm() {
    console.log(this.signInForm.value);
  }

  handleSignUp() {
    this.router.navigate(['/cadastro']);
  }
}

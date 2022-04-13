import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrServiceService } from 'src/app/core/toastr-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({
    cpf: new FormControl(null, [Validators.required]),
    fullname: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, []),
    gender: new FormControl('', []),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, []),
  });
  constructor(
    private router: Router,
    private toastrServiceService: ToastrServiceService
  ) {}

  ngOnInit(): void {}

  handleSubmitForm() {
    try {
      if (!this.signUpForm.valid) throw new Error('Formulário inválido');
      const formValue = this.signUpForm.value;

      if (formValue.password !== formValue.confirmPassword) {
        return this.toastrServiceService.warning('Senhas não conferem');
      }

      return this.toastrServiceService.success(
        'Cadastro realizado com sucesso'
      );
    } catch (error) {
      this.toastrServiceService.error(
        'Ocorreu um erro, favor verificar os dados informados.'
      );
      return;
    }
  }

  handleSignIn() {
    this.router.navigate(['/']);
  }
}

import { Injectable } from '@angular/core';
import { ToastrService as toastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastrServiceService {
  constructor(private toastr: toastrService) {}

  success(msg: string) {
    return this.toastr.success(msg, 'Sucesso!');
  }

  error(msg: string) {
    return this.toastr.error(msg, 'Erro!');
  }

  info(msg: string) {
    return this.toastr.info(msg, 'Info!');
  }

  warning(msg: string) {
    return this.toastr.warning(msg, 'Atenção!');
  }
}

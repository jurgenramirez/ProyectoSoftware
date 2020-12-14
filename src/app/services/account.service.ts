import { User } from './../store/model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config/local';
import { Usuario } from '../store/model';
import { TokenService } from './token.service';


@Injectable()
export class AccountService {

  publicUrl = `${config.apiUrl}/api/public/account`;
  url = `${config.apiUrl}/api/account`;

  constructor(private httpClient: HttpClient, private token: TokenService) {
  }

  createAccount(email: string, password: string, passwordRepeat: string) {
    return this.httpClient.post(this.publicUrl + '/registration', {
      email,
      password,
      passwordRepeat
    }, { headers: { 'Content-type': 'application/json; charset=utf-8' } });
  }

  getUser() {
    return this.httpClient.get<User>(this.url);
  }

  getUser1() {
    console.log('devoviendo getUser1()');
    console.log(this.token.getToken());
    return this.httpClient.get<Usuario>('http://34.67.194.244:5000/getCliente?idUsuario=27');
  }
  updateUser(user) {
    return this.httpClient.put(this.url, user);
  }

  updateUserAddress(user) {
    return this.httpClient.put(`${this.url}/address`, user);
  }

  verifyEmail(verificationToken) {
    return this.httpClient.post(this.publicUrl + '/registration/validate', {
      token: verificationToken
    });
  }

  forgotPasswordRequest(email) {
    return this.httpClient.post(this.publicUrl + '/password/forgot', {
      email
    });
  }

  forgotPasswordConfirm(passwordForgotToken) {
    return this.httpClient.post(this.publicUrl + '/password/forgot/confirm', {
      token: passwordForgotToken
    });
  }

  forgotPasswordReset(passwordForgotToken, newPassword, newPasswordConfirm) {
    return this.httpClient.post(this.publicUrl + '/password/forgot/validate', {
      token: passwordForgotToken,
      newPassword,
      newPasswordConfirm
    });
  }


  resetPassword(oldPassword, newPassword, newPasswordConfirm) {
    return this.httpClient.post(this.url + '/password/reset', {
      oldPassword,
      newPassword,
      newPasswordConfirm
    });
  }

  getVerificationStatus() {
    return this.httpClient.get(this.url + '/status');
  }

}

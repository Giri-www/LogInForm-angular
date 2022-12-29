import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //  name = 'Angular ' + VERSION.major;

  login: FormGroup;

  ngOnInit() {
    this.login = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  get username() {
    return this.login.get('username');
  }
  get password() {
    return this.login.get('password');
  }
}

import { Component } from '@angular/core';
import {decrypt, encrypt} from './crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token = 's6v9y$B?E(H+MbQeThWmZq4t7w!z%C*F';

  constructor() {
    const val = 'Hello World!';
    const encryptedStr = encrypt(val, this.token);
    const decryptedStr = decrypt(encryptedStr, this.token);
    console.log('enc', encryptedStr);
    console.log('dec', decryptedStr);
  }
}

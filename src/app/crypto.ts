import {Buffer} from 'buffer';
import * as CryptoJS from 'crypto-js';

export function decrypt(encryptedStr: string, key: string): string {
  const IV = new Buffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const encryptKey = CryptoJS.enc.Utf8.parse(key);
  const bytes = CryptoJS.AES.decrypt(
    encryptedStr.toString(),
    encryptKey,
    {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
      iv: CryptoJS.enc.Utf8.parse(IV.toString()),
    },
  );

  return CryptoJS.enc.Utf8.stringify(bytes);
}

export function encrypt(val: string, key: string): string {
  const IV = new Buffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const encryptKey = CryptoJS.enc.Utf8.parse(key);
  const encryptedStr = CryptoJS.AES.encrypt(
    val,
    encryptKey,
    {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
      iv: CryptoJS.enc.Utf8.parse(IV.toString()),
    },
  );
  return encryptedStr.toString();
}

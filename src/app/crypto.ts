import {Buffer} from 'buffer';
import {enc,AES, mode, pad} from 'crypto-js';

export function decrypt(encryptedStr: string, key: string): string {
  const IV = new Buffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const encryptKey = enc.Utf8.parse(key);
  const bytes = AES.decrypt(
    encryptedStr.toString(),
    encryptKey,
    {
      mode: mode.CBC,
      padding: pad.Pkcs7,
      iv: enc.Utf8.parse(IV.toString()),
    },
  );

  return enc.Utf8.stringify(bytes);
}

export function encrypt(val: string, key: string): string {
  const IV = new Buffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const encryptKey = enc.Utf8.parse(key);
  const encryptedStr = AES.encrypt(
    val,
    encryptKey,
    {
      mode: mode.CBC,
      padding: pad.Pkcs7,
      iv: enc.Utf8.parse(IV.toString()),
    },
  );
  return encryptedStr.toString();
}

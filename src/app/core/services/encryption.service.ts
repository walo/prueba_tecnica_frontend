import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private readonly secretKey = 'your-very-secure-secret-key'; // Mejor inyectar esta clave

  encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.secretKey).toString();
  }

  decrypt(textToDecrypt: string): string {
    const bytes = CryptoJS.AES.decrypt(textToDecrypt, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
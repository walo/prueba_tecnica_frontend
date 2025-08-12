import { Injectable } from '@angular/core';
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor(private encryptionService: EncryptionService) {}

  setItem(key: string, value: any): void {
    const stringValue = JSON.stringify(value);
    const encryptedValue = this.encryptionService.encrypt(stringValue);
    sessionStorage.setItem(key, encryptedValue);
  }

  getItem<T>(key: string): T | null {
    const encryptedValue = sessionStorage.getItem(key);
    if (!encryptedValue) {
      return null;
    }
    try {
      const decryptedValue = this.encryptionService.decrypt(encryptedValue);
      return JSON.parse(decryptedValue) as T;
    } catch {
      console.error('Error decrypting or parsing session storage item');
      return null;
    }
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  clear(): void {
    sessionStorage.clear();
  }
}
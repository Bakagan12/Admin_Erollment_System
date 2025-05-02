import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactNumberService {

  constructor() {}

  formatContactNumber(inputValue: string): string {
    if (!inputValue.startsWith('+63')) {
      inputValue = '+63';
    }

    // Extract numeric part after +63 and remove non-digits
    let digits = inputValue.slice(3).replace(/\D/g, '');

    // Limit to 10 digits
    digits = digits.slice(0, 10);

    return '+63' + digits;
  }

  onContactInput(event: any, currentValue: string): void {
    const formatted = this.formatContactNumber(event.target.value);
    event.target.value = formatted;
    // Optional: update the ngModel manually if needed
    if (currentValue !== formatted) {
      currentValue = formatted;
    }
  }
}

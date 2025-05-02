// form-data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData: any = {};

  // Save data for each step
  saveStepData(step: string, data: any) {
    this.formData[step] = data;
  }

  // Retrieve data for a specific step
  getStepData(step: string) {
    return this.formData[step];
  }

  //wala mo gawas
  // Get all the collected data
  getAllData() {
    return this.formData;
  }
}

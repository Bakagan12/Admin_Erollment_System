import { RetrieveDataService } from "../service/modelData/retrieve-data.service";
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public suffixesSubject = new BehaviorSubject<any[]>([]);
  suffixes$ = this.suffixesSubject.asObservable();

  public gradeLevelData = new BehaviorSubject<any[]>([]);
  gradeLevels$ = this.gradeLevelData.asObservable();

   public classificationLevelData = new BehaviorSubject<any[]>([]);
  classificationLevel$ = this.classificationLevelData.asObservable();

  constructor(private retrieveDataService: RetrieveDataService) {}

  loadSuffixes(): void {
    this.retrieveDataService.getAllSuffixes().subscribe({
      next: (data) => {
        this.suffixesSubject.next(data);
      }
    });
  }

  loadGradeLevels(): void {
    this.retrieveDataService.getAllGradeLevels().subscribe({
      next: (data) => {
        this.gradeLevelData.next(data);
      },
      error: (err) => {
        console.error('Error fetching grade levels:', err);
      }
    });
  }
   loadClassificationLevel(): void {
    this.retrieveDataService.getAllClassifications().subscribe({
      next: (data) => {
        this.classificationLevelData.next(data);
      },
      error: (err) => {
        console.error('Error fetching grade levels:', err);
      }
    });
  }
}

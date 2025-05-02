import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private _searchQuery = new BehaviorSubject<string>('');
  private _currentPage = new BehaviorSubject<number>(1);
  private _itemsPerPage = new BehaviorSubject<number>(10);
  private _sortByIdAsc = new BehaviorSubject<boolean>(true);

  searchQuery$ = this._searchQuery.asObservable();
  currentPage$ = this._currentPage.asObservable();
  itemsPerPage$ = this._itemsPerPage.asObservable();
  sortByIdAsc$ = this._sortByIdAsc.asObservable();

  setSearchQuery(query: string) {
    this._searchQuery.next(query);
    this._currentPage.next(1); // Reset page on search
  }

  setCurrentPage(page: number) {
    this._currentPage.next(page);
  }

  setItemsPerPage(count: number) {
    this._itemsPerPage.next(count);
  }

  setSortByIdAsc(asc: boolean) {
    this._sortByIdAsc.next(asc);
  }

  toggleSortById() {
    this._sortByIdAsc.next(!this._sortByIdAsc.value);
  }
  
  get searchQuery(): string {
    return this._searchQuery.value;
  }

  get currentPage(): number {
    return this._currentPage.value;
  }

  get itemsPerPage(): number {
    return this._itemsPerPage.value;
  }

   get sortByIdAsc(): boolean {
    return this._sortByIdAsc.value;
  }
}

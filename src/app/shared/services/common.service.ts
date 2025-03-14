import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  #showToast$ = new BehaviorSubject('');
  #loading$ = new Subject<boolean>();

  toastSubject(message: string): void {
    this.#showToast$.next(message);
  }

  toastObservable(): Observable<string> {
    return this.#showToast$.asObservable();
  }

  loadingSubject(isLoading: boolean): void {
    this.#loading$.next(isLoading);
  }

  loadingObservable(): Observable<boolean> {
    return this.#loading$.asObservable();
  }
}

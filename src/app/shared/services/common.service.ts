import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  #showToast$ = new BehaviorSubject('');

  toastSubject(message: string): void {
    this.#showToast$.next(message);
  }

  toastObservable(): Observable<string>{
    return this.#showToast$.asObservable();
  }

}

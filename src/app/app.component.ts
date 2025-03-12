import { Component, inject } from '@angular/core';
import { CommonService } from './shared/services';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  isToastOpen = false;
  message = '';
  appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Usuarios', url: '/student', icon: 'people' },
    { title: 'Tutores', url: '/tutors', icon: 'ribbon' },
    { title: 'Reservas', url: '/booking', icon: 'bookmarks' },
  ];

  #commonService = inject(CommonService);

  constructor() {
    this.#commonService.toastObservable().subscribe((message: string) => {
      if (message) {
        this.message = message;
        this.isToastOpen = true;
      }
    });
  }
}

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Usuarios', url: '/student', icon: 'people' },
    { title: 'Tutores', url: '/tutors', icon: 'people-circle' },
    { title: 'Reservas', url: '/reservations', icon: 'bookmarks' },
  ];
  constructor() {}
}

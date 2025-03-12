import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Usuarios', url: '/home', icon: 'people' },
    { title: 'Tutores', url: '/tutors', icon: 'people-circle' },
    { title: 'Reservas', url: '/student', icon: 'bookmarks' },
    { title: 'Clases', url: '/classes', icon: 'book' },
  ];
  constructor() {}
}

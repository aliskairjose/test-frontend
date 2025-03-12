import { Component, inject, OnInit } from '@angular/core';
import { ApiEnum } from 'src/app/shared/enums.ts';
import { ApiService } from 'src/app/shared/services';
import { UsersInterface } from './interfaces/user.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
  standalone: false,
})
export class StudentPage implements OnInit {
  #apiService = inject(ApiService);
  users: UsersInterface[] = [];
  constructor() {}

  ngOnInit() {
    this.#apiService
      .list<UsersInterface[]>(ApiEnum.Usuarios)
      .subscribe((users)=> this.users = users);
  }
}

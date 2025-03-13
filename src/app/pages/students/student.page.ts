import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ApiEnum } from 'src/app/shared/enums.ts';
import { ApiService } from 'src/app/shared/services';
import { UsersInterface } from './interfaces/user.interface';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
  standalone: false,
})
export class StudentPage implements OnInit {
  #apiService = inject(ApiService);
  users: UsersInterface[] = [];
  user: UsersInterface | undefined;
  isModalOpen = false;
  query = '';

  @ViewChild(IonModal) modal!: IonModal;

  ngOnInit() {
    this.#apiService
      .list<UsersInterface[]>(ApiEnum.Usuarios)
      .subscribe((users) => (this.users = users));
  }

  setOpen(isOpen: boolean, id?: number) {
    this.isModalOpen = isOpen;
    this.user = this.users.find((u) => u.id === id);
  }

  handleInput(query: unknown): void {
    this.query = query as string;
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services';
import { TutorInterface } from './interfaces/tutor.interface';
import { ApiEnum } from 'src/app/shared/enums.ts';
import { SpecialityType } from './constants/speciality.constant';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
  standalone: false,
})
export class TutorsPage implements OnInit {
  #apiService = inject(ApiService);
  specialityColor = SpecialityType;

  tutors: TutorInterface[] = [];

  ngOnInit() {
    this.#apiService
      .list<TutorInterface[]>(ApiEnum.Tutores)
      .subscribe((tutors) => (this.tutors = tutors));
  }
}

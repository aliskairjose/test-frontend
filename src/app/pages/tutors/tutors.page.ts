import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services';
import { TutorInterface } from './interfaces/tutor.interface';
import { ApiEnum } from 'src/app/shared/enums.ts';
import { SpecialityType } from './constants/speciality.constant';
import { map } from 'rxjs';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
  standalone: false,
})
export class TutorsPage implements OnInit {
  #apiService = inject(ApiService);
  specialityColor = SpecialityType;
  query = '';
  tutors: TutorInterface[] = [];
  specialities: string[] = [];

  ngOnInit() {
    this.#apiService
      .list<TutorInterface[]>(ApiEnum.Tutores)
      .subscribe((tutors) => {
        this.tutors = tutors;
        this.setSpecialities(tutors);
      });
  }

  setSpecialities(tutors: TutorInterface[]): void {
    this.specialities = [...new Set(tutors.map((t) => t.speciality))];
  }

  handleChange(value: unknown): void {
    this.query = value as string;
  }
}

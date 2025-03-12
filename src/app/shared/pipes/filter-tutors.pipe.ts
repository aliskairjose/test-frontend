import { Pipe, PipeTransform } from '@angular/core';
import { TutorInterface } from 'src/app/pages/tutors/interfaces/tutor.interface';

@Pipe({
  name: 'filterTutors',
  standalone: false,
})
export class FilterTutorsPipe implements PipeTransform {
  transform(tutors: TutorInterface[], term: string): TutorInterface[] {
    return term
      ? tutors.filter((tutor) =>
          tutor.speciality.toLowerCase().includes(term.toLowerCase())
        )
      : tutors;
  }
}

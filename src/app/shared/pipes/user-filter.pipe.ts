import { Pipe, PipeTransform } from '@angular/core';
import { UsersInterface } from 'src/app/pages/students/interfaces/user.interface';

@Pipe({
  name: 'userFilter',
  standalone: false,
})
export class UserFilterPipe implements PipeTransform {
  transform(users: UsersInterface[], term: string): UsersInterface[] {
    if (!term) return users;

    const query = term.toLowerCase();

    return users.filter((u) => {
      const { first_name, last_name, email, phone } = u;
      return(
        first_name.toLowerCase().includes(query)||
        last_name.toLowerCase().includes(query)||
        email.toLowerCase().includes(query)||
        phone.toLowerCase().includes(query)
      )
    });
  }
}

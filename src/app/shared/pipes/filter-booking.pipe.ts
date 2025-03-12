import { Pipe, PipeTransform } from '@angular/core';
import { BookingInterface } from 'src/app/pages/booking/interfaces/booking.interface';

@Pipe({
  name: 'filterBooking',
  standalone: false,
})
export class FilterBookingPipe implements PipeTransform {
  transform(bookings: BookingInterface[], term: string): BookingInterface[] {
    if (!term) return bookings;
    const query = term.toLowerCase();
    return bookings.filter((b) => {
      const {
        user: { first_name, last_name, email, phone },
      } = b;

      return (
        first_name.toLowerCase().includes(query) ||
        last_name.toLowerCase().includes(query) ||
        email.toLowerCase().includes(query) ||
        phone.toLowerCase().includes(query)
      );
    });
  }
}

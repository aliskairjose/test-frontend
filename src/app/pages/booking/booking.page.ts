import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services';
import { BookingInterface } from './interfaces/booking.interface';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: false,
})
export class BookingPage implements OnInit {

  #apiService = inject(ApiService);
  bookings: BookingInterface[] = [];

  ngOnInit() {
  }

}

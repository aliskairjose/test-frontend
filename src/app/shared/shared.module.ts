import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { ApiService } from './services';
import { FilterTutorsPipe } from './pipes/filter-tutors.pipe';
import { FilterBookingPipe } from './pipes/filter-booking.pipe';

const D = [HeaderComponent, FilterTutorsPipe, FilterBookingPipe];

@NgModule({
  declarations: [...D],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [...D],
  providers:[ApiService]
})
export class SharedModule { }

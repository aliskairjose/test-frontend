import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ApiService } from './services';
import { UserFilterPipe, FilterBookingPipe, FilterTutorsPipe } from './pipes';
import { HeaderComponent, NoResultsComponent } from './components';

const D = [HeaderComponent, FilterTutorsPipe, FilterBookingPipe, NoResultsComponent, UserFilterPipe];

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

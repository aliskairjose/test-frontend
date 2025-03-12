import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { ApiService } from './services';
import { FilterTutorsPipe } from './pipes/filter-tutors.pipe';

const D = [HeaderComponent, FilterTutorsPipe];

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

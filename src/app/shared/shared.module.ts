import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { ApiService } from './services';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [HeaderComponent],
  providers:[ApiService]
})
export class SharedModule { }

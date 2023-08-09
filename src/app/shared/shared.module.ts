import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonheaderComponent } from './common-header/common-header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [CommonheaderComponent],
  exports: [CommonheaderComponent]
})
export class SharedModule {}

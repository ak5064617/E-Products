import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CumstomDropdownComponent } from '../components/cumstom-dropdown/cumstom-dropdown.component';



@NgModule({
  declarations: [CumstomDropdownComponent],
  imports: [
    CommonModule,
  ],
  exports: [CumstomDropdownComponent]
})
export class SharedModule { }

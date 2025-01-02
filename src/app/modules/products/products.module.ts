import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CumstomDropdownComponent } from 'src/app/modules/shared/components/cumstom-dropdown/cumstom-dropdown.component';
import { AppModule } from 'src/app/app.module';
import { SharedModule } from '../shared/shared/shared.module';
import { ProductDetailModalComponent } from './components/product-detail-modal/product-detail-modal.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailModalComponent
  ],
  exports: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
  ]
})
export class ProductsModule { }

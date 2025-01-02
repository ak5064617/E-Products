import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import IPRODUCT from 'src/app/modules/products/Interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.css']
})
export class ProductDetailModalComponent implements OnInit {
   product:any;
   productId: any;
    constructor (private readonly productService : ProductService,
       private readonly matdialogRef: MatDialogRef<ProductDetailModalComponent>,
       @Inject(MAT_DIALOG_DATA) public data: {product: IPRODUCT}) {
      this.productId = this.data.product.id;
      // this.product =  this.data.product;
    }
    closeModal(): void {
      this.matdialogRef.close();
    }
   ngOnInit(): void {
      this.productDetails();
   }
   

  productDetails(){
    this.productService.getProductDetails(this.productId).subscribe({
      next: (data: any)=>{
           this.product = data;
      },
      error(err){

      }
    })

   }

}

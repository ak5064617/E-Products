import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailModalComponent } from '../product-detail-modal/product-detail-modal.component';
import IPRODUCT from 'src/app/modules/products/Interfaces/product.interface';
import IFILTER from 'src/app/modules/shared/interfaces/filter.interface';
import { ProductService } from '../../services/product.service';
import { FILTERDATA } from 'src/app/modules/shared/interfaces/filter.data';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IPRODUCT[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];
  filters : IFILTER = FILTERDATA;
  isLoading: boolean = false;
  hasMore: boolean = true;
  openDropdown: string | null = null;
  constructor(private readonly productService: ProductService, private readonly matdialog: MatDialog) {}

  ngOnInit(): void {
    this.getCatergoriesList();
    this.loadProducts();
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  getCatergoriesList() : void {
    this.productService.getCategories().subscribe({
      next: (data:any) => {
        this.categories = data;
        this.categories.unshift('All');
      }
    })
  }

  loadProducts(): void {
    if (this.isLoading || !this.hasMore) return;
    this.isLoading = true;
    this.productService.getproductList(this.filters).subscribe({
        next : (data: any) => {
          if (data.length === 0) this.hasMore = false;
          this.products.push(...data);
          this.filteredProducts = JSON.parse(JSON.stringify(this.products));
          this.isLoading = false;
          this.filters.page++;
        },
        error(err){}
      })
    }

  applyFilters(): void {  
      this.filters.page = 1;
      this.productService.getproductList(this.filters).subscribe({
        next: (data:any)=> {
          this.products = [];
          this.filteredProducts =[];
          this.products = data;
          this.filteredProducts = JSON.parse(JSON.stringify(this.products));
          this.filters.page++;
        },
        error(err){}
      })
  }

  onScroll(): void {
    const bottomReached = window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;
    if (bottomReached) this.loadProducts();
  }

  showDetails(product: IPRODUCT): void {
    this.matdialog.open(ProductDetailModalComponent,{
        width: '600px',
        data: { product },
      }
    )
  }

  onDropdownToggle(dropdown: string): void {
    this.openDropdown = this.openDropdown === dropdown ? null : dropdown;
  }

}

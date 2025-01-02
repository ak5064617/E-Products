import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import IFILTER from '../../shared/interfaces/filter.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http: HttpClient) {

   }
  getproductList(filter: IFILTER){
    let url = `https://fakestoreapi.com/products`;
    if(filter.filterBy && filter.filterBy !='All'){
      url += `/category/${filter.filterBy}` 
    }
    url += `?limit=${filter.limits}&page=${filter.page}`;
    if(filter.sortBy){
      url += (filter.sortBy === 'Price: Low to High') ? '&sort=asc' : '&sort=desc';
    }
    return this.http.get(url);
  }
  getProductDetails(id: number){
    const url = `https://fakestoreapi.com/products/${id}`;
    return this.http.get(url);
  }
  getCategories(){
    const url = `https://fakestoreapi.com/products/categories`;
    return this.http.get(url);
  }

}

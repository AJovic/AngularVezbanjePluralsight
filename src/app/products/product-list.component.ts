import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { ProductServices } from './product.service';

@Component({
    selector:"pm-products",
    templateUrl : './product-list.component.html'
})

export class ProductListComponent implements OnInit{
    pageTitle : string = "Product List title";
    aca : boolean=true;
    imageWidth : number=50;
    imageMargin :number=2
    showImage :boolean =false;
    // listFilter: string = 'cart'
     _listFilter : any;
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;

    }
    products : IProduct[] =[]

    constructor(private http : HttpClient, private productService : ProductServices){}

    toggleImage():void{
        this.showImage = !this.showImage
    }

    ngOnInit():void{
debugger
        this.productService.getProducts().subscribe( { 
            next: products => this.products = products,
 
        })
        console.log("")
    }

    onRaitingClicked(message: string): void {
        console.log(message)
    }
}
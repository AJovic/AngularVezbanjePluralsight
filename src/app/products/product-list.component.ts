import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

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
    products : IProduct[] =[
        {
            "productId":1,
            "productName":"Sljiva",
            "productCode":"12345",
            "avaible":"yes",
            "price":1000,
            "starRating":5,
            "imageUrl" : "assets/1.png"
        },
        {
            "productId":2,
            "productName":"Kruska",
            "productCode":"12345",
            "avaible":"yes",
            "price":1000,
            "starRating":50,
            "imageUrl" : "assets/1.png"
        }
    ] ;

    toggleImage():void{
        this.showImage = !this.showImage
    }

    ngOnInit():void{
        debugger
        console.log("")
    }

    onRaitingClicked(message: string): void {
        console.log(message)
    }
}
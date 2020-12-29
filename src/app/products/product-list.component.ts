import { Component } from '@angular/core';

@Component({
    selector:"pm-products",
    templateUrl : './product-list.component.html'
})

export class ProductListComponent{
    pageTitle : string = "Product List title";
    aca : boolean=true;
    imageWidth : number=50;
    imageMargin :number=2
    products : any[] =[
        {
            "productId":1,
            "productName":"Sljiva",
            "productCode":"12345",
            "avaible":"yes",
            "price":"1000$",
            "starRating":5,
            "imageUrl" : "assets/1.png"
        },
        {
            "productId":2,
            "productName":"Kruska",
            "productCode":"12345",
            "avaible":"yes",
            "price":"1000$",
            "starRating":5
        }
    ] ;
}
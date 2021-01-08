import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { IProduct } from './product';
import {Router} from '@angular/router'

@Component({    
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = "Ovo je stranica detalja";
  product :any

  constructor(private route:ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)
  }

  onBack() : void{
    this.router.navigate(['/products'])
  }

}

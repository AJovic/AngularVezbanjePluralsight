import { isPromise } from '@angular/compiler/src/util'
import {Injectable } from '@angular/core'
import {IProduct} from "./IProduct"
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"

@Injectable({
    providedIn:"root"
})
export class ProductServices {

    url: string =  "src\assets\api\products\products.js"
    constructor(private http : HttpClient){}
    getProducts() : Observable<IProduct[]>{
          return this.http.get<IProduct[]>("http://localhost:4200/assets/api/products/products.js")
    }
}
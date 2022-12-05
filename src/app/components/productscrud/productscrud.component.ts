import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { Products } from 'src/app/model/Products';

@Component({
  selector: 'app-productscrud',
  templateUrl: './productscrud.component.html',
  styleUrls: ['./productscrud.component.css']
})
export class ProductscrudComponent implements OnInit {
  isEdit:boolean = false
  btnTitle: string = 'Add Product';
  prod: Products = {
    code: -1,
    name: '',
    desc: '',
    manu: '',
    price: -1
  }
  constructor() { }

  ngOnInit(): void {
  }


  product: Products[] = []
  addProduct(): void {
    this.btnTitle = this.btnTitle === "Update Product" ? "Add Product" : this.btnTitle;
    let prodnew = {

      code: this.prod.code,

      name: this.prod.name,
      desc: this.prod.desc,
      manu: this.prod.manu,
      price: this.prod.price
    }

    this.product.push(prodnew)

    // console.log(this.product)

    this.clearhtml()

  }

  clearhtml(): void {
    this.prod = {
      code: -1,
      name: '',
      desc: '',
      manu: '',
      price: -1
    }
  }
  deleteRecord(code: number): void {

    this.product = this.product.filter(pro => pro.code != code)
  }
  updateRecord(code: number): void {
    this.btnTitle = "Update Product";
    this.isEdit = true
    this.product.forEach(element => {
      if (code === element.code) {
        this.deleteRecord(code)
        this.prod = {
          code: element.code,
          name: element.name,
          desc: element.desc,
          manu: element.manu,
          price: element.price
        }
      }
    });

  }
}

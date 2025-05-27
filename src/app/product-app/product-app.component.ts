import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './product-app.component.html',
  styleUrl: './product-app.component.css'
})
export class ProductAppComponent {

  productForm:FormGroup;
  constructor(private fp : FormBuilder){
    this.productForm = this.fp.group({
      name:['', Validators.required],
      category:['',Validators.required],
      price:[null,[Validators.required, Validators.min(0.01)]],
      quantity:[0,Validators.min(0)],
      description:['']
    });
  }


get f(): Record<string, AbstractControl> {
  return this.productForm.controls;
}

  get isPremuim() :boolean{
    return this.productForm .get("price")?.value > 1000;
  }
  onSubmit() : void{
      if(this.productForm.valid){
        console.log('produit creer :', this.productForm.value);
      }
      else{
        console.log('error lors de la creation de produits');
        console.log(this.productForm.errors);
        console.log(this.productForm.get('name')?.errors);
        console.log(this.productForm.get('category')?.errors);
      }
  }
  onReset(): void{
    this.productForm.reset();
  }
}

import {Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {IngredientModel} from "../../../Models/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef
  @ViewChild('amountInput') amountInput: ElementRef
  ingredientAdded = new EventEmitter<IngredientModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddItem() {
  const ingName = this.nameInput.nativeElement.value;
  const amountName = this.amountInput.nativeElement.value;

  //this.ingredientAdded.emit(new Ingredi)
  }

}

import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from "../../../Models/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef
  @ViewChild('amountInput') amountInput: ElementRef
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddItem() {
    let newIngredient: IngredientModel = {
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    }
    this.ingredientAdded.emit(newIngredient);
  }

}

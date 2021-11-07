import {Component, OnInit} from '@angular/core';
import {IngredientModel} from "../../Models/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.createIngredients();
  }

  createIngredients(){
    this.ingredients = [
      { name:"Apples", amount:5},
      { name:"Tomatoes", amount:1},
      { name:"Flour", amount:2},
      { name:"Eggs", amount:4},
      { name:"Potatoes", amount:6},
    ]
  }

}

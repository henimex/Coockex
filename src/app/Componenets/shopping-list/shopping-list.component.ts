import {Component, OnInit} from '@angular/core';
import {IngredientModel} from "../../Models/ingredient.model";
import {ShoppingListService} from "../../Services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

}

import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from "../Models/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<IngredientModel[]>();
  private ingredients: IngredientModel[];

  constructor() {
    this.createIngredients()
  }

  createIngredients() {
    this.ingredients = [
      {name: "Apples", amount: 5},
      {name: "Tomatoes", amount: 1},
      {name: "Flour", amount: 2},
      {name: "Eggs", amount: 4},
      {name: "Potatoes", amount: 6},
    ]
  }

  onIngredientAdded(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../../../Models/recipe.model";
import {RecipeService} from "../../../Services/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[]

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes()
  }

}

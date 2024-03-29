import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../../../Models/recipe.model";
import {RecipeService} from "../../../../Services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;


  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}

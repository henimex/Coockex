import {EventEmitter, Injectable} from '@angular/core';
import {RecipeModel} from "../Models/recipe.model";
import {IngredientModel} from "../Models/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: RecipeModel[];
  recipeSelected = new EventEmitter<RecipeModel>();

  constructor(private shoppingListService: ShoppingListService) {
    this.createRecipes()
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngToShopping(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients)
  }

  createRecipes() {
    this.recipes = [
      {
        name: "Sebzeli Börek",
        description: "Pratik Milföy Hamurlu Börek Tarifi",
        imagePath: "https://i.nefisyemektarifleri.com/2021/11/06/sebzeli-borek-milfoy-hamurundan.jpg",
        ingredients: [
          {name: 'Apple', amount: 6},
          {name: 'Mushroom', amount: 1},
        ]
      },
      {
        name: "İçli Köfte",
        description: "İlk olarak içli köftemizin iç harcını hazırlayarak soğumaya bırakalım. Bunun için genişçe bir tavaya sıvı yağ alarak küçük küçük doğradığımız soğanları hafif pembeleşinceye kadar kavuralım.",
        imagePath: "https://i.nefisyemektarifleri.com/2017/12/01/en-kolay-icli-kofte-tarifi-videolu.jpg",
        ingredients: [
          {name: 'Flour [Kg]', amount: 1},
          {name: 'Sugar [Glass]', amount: 3},
          {name: 'Eggs', amount: 4},
          {name: 'Milk [Kg]', amount: 1},
        ]
      },
      {
        name: "Fırında Tavuk Şiş",
        description: "Evde yaptığınız diğer tavuk şişlere göre daha yumuşak olan lokum kıvamında fırında çöp şişleri sizlerde çok seveceksiniz.",
        imagePath: "https://i.nefisyemektarifleri.com/2018/06/29/lokum-gibi-yumusacik-firinda-tavuk-cop-sis-14.jpg",
        ingredients: [
          {name: 'Chicken', amount: 1},
          {name: 'Cream', amount: 2},
          {name: 'Onion', amount: 3},
        ]
      },
      {
        name: "Anne Köftesi",
        description: "Çocukların yemekten en keyif aldığı yiyeceklerin başında şüphesiz köfte gelir. ",
        imagePath: "https://i.nefisyemektarifleri.com/2015/07/06/nefis-anne-koftesi.jpg",
        ingredients: [
          {name: 'Meat [Kg]', amount: 1},
          {name: 'Salt [Spoon]', amount: 3},
        ]
      },
      {
        name: "Arnavut Ciğeri",
        description: "Ciğer küp küp doğranarak süzgeç ile iyice süzülmesi sağlanır.",
        imagePath: "https://i.nefisyemektarifleri.com/2021/11/07/arnavut-cigeri.jpg",
        ingredients: [
          {name: 'Meat [Kg]', amount: 1},
          {name: 'Strong Wood Fire', amount: 1},
        ]
      },
    ]
  }
}

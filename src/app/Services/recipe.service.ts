import {EventEmitter, Injectable} from '@angular/core';
import {RecipeModel} from "../Models/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: RecipeModel[];
  recipeSelected = new EventEmitter<RecipeModel>();

  constructor() {
    this.createRecipes()
  }

  getRecipes(){
    return this.recipes.slice();
  }

  createRecipes() {
    this.recipes = [
      {
        name: "Sebzeli Börek",
        description: "Pratik Milföy Hamurlu Börek Tarifi",
        imagePath: "https://i.nefisyemektarifleri.com/2021/11/06/sebzeli-borek-milfoy-hamurundan.jpg"
      },
      {
        name: "İçli Köfte",
        description: "İlk olarak içli köftemizin iç harcını hazırlayarak soğumaya bırakalım. Bunun için genişçe bir tavaya sıvı yağ alarak küçük küçük doğradığımız soğanları hafif pembeleşinceye kadar kavuralım.",
        imagePath: "https://i.nefisyemektarifleri.com/2017/12/01/en-kolay-icli-kofte-tarifi-videolu.jpg"
      },
      {
        name: "Fırında Tavuk Şiş",
        description: "Evde yaptığınız diğer tavuk şişlere göre daha yumuşak olan lokum kıvamında fırında çöp şişleri sizlerde çok seveceksiniz.",
        imagePath: "https://i.nefisyemektarifleri.com/2018/06/29/lokum-gibi-yumusacik-firinda-tavuk-cop-sis-14.jpg"
      },
      {
        name: "Anne Köftesi",
        description: "Çocukların yemekten en keyif aldığı yiyeceklerin başında şüphesiz köfte gelir. ",
        imagePath: "https://i.nefisyemektarifleri.com/2015/07/06/nefis-anne-koftesi.jpg"
      },
      {
        name: "Arnavut Ciğeri",
        description: "Ciğer küp küp doğranarak süzgeç ile iyice süzülmesi sağlanır.",
        imagePath: "https://i.nefisyemektarifleri.com/2021/11/07/arnavut-cigeri.jpg"
      },
    ]
  }
}
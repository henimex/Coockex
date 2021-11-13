import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Componenets/header/header.component';
import { RecipesComponent } from './Componenets/recipes/recipes.component';
import { RecipeDetailComponent } from './Componenets/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './Componenets/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Componenets/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './Componenets/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Componenets/shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './Componenets/Bindings/cockpit/cockpit.component';
import { ServerElementComponent } from './Componenets/Bindings/server-element/server-element.component';
import {FormsModule} from "@angular/forms";
import { ShowcaseComponent } from './Componenets/Bindings/showcase/showcase.component';
import { DropdownDirective } from './Core/dropdown.directive';
import {RecipeService} from "./Services/recipe.service";
import {ShoppingListService} from "./Services/shopping-list.service";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    ShowcaseComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RecipeService,ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

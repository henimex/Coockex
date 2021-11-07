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
import { StyleTestsComponent } from './Componenets/style-tests/style-tests.component';
import { HoversComponent } from './DesignTests/hovers/hovers.component';



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
    StyleTestsComponent,
    HoversComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

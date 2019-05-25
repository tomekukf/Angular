import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from '../shopping-list/shopping-list.service';
import {sp} from '@angular/core/src/render3';

@Injectable()
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [

    new  Recipe('banan cake',
      'delicious',
      'https://cdn.pixabay.com/photo/2018/11/05/12/42/food-3796017_960_720.jpg', [
        new Ingredient('banana', 1  ),
        new Ingredient('flour', 200 )
      ] ),

    new Recipe('KFC chicken',
      'original receipt',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/KFC_Original_Recipe_chicken_in_bucket.jpg/800px-KFC_Original_Recipe_chicken_in_bucket.jpg',
      [
        new Ingredient('chicken', 4  ),
        new Ingredient('flour', 500  )

      ])
  ];

  constructor(private spSercice: ShoppingService) {

  }

  getAllRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
    // return this.recipes.slice()[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.spSercice.addIngredientsToList(ingredients);
  }
}

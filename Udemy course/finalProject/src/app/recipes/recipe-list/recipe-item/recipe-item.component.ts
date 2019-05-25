import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';
import {RecipesService} from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input()  index: number;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeSubject.next(this.recipe);
  }

}

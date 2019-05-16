import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getAllIngredients();
    this.shoppingListService.shoppingSelected.subscribe(
      (ingredients: Ingredient[]) => {this.ingredients = ingredients}
    );
  }

}

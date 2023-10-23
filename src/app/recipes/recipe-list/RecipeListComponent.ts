import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test recipe 1", "Test recipe description", "https://cdn.pixabay.com/photo/2023/10/06/07/14/plant-8297610_1280.jpg"),
    new Recipe("Test recipe 2", "Test recipe description", "https://cdn.pixabay.com/photo/2023/10/06/07/14/plant-8297610_1280.jpg"),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}

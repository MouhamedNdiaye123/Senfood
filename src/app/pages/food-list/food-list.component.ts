import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food.service';
import { Food } from '../../types/food';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent implements OnInit{
  foodList: Food[] = [];

  add(){

  }

  // Injection de dependance
  constructor(private foodService: FoodService){}
  ngOnInit(): void {
    this.foodList= this.foodService.getFood()
  }
}

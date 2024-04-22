import { FoodListComponent } from './../food-list/food-list.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../types/food';
import { FoodService } from '../../services/food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-detail.component.html',
  styleUrl: './food-detail.component.css'
})
export class FoodDetailComponent implements OnInit {
  foodList: Food[] =[];
  food: Food|undefined;

  constructor(private activeRoute: ActivatedRoute,
    private foodService: FoodService
  ){}

  ngOnInit(): void {
    let id: string|null = this.activeRoute.snapshot.paramMap.get('id');
    
    if(id){
      this.food = this.foodService.getFoodById(+id);
    }
  }
}

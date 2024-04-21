import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../types/food';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-food-detail',
  standalone: true,
  imports: [],
  templateUrl: './food-detail.component.html',
  styleUrl: './food-detail.component.css'
})
export class FoodDetailComponent implements OnInit {
  // food: Food;

  constructor(private activeRoute: ActivatedRoute,
    private foodService: FoodService
  ){}

  ngOnInit(): void {
    // let idAliment = this.activeRoute.snapshot.paramMap.get('id');
    
    //   this.foodList = this.foodService.getFoodById(idAliment);
  }
}

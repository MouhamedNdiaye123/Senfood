import { Food } from './../types/food';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getFood(): Food[]{
    return[
      {
        id: 1,
        name: 'burger',
        price: 1500,
        imgUrl: 'assets/images/burger1.png',
        description: 'lorem amet '
      },
      {
        id: 2,
        name: 'burger',
        price: 1500,
        imgUrl: 'assets/images/burger1.png',
        description: 'lorem amet '
      },
      {
        id: 3,
        name: 'burger',
        price: 1500,
        imgUrl: 'assets/images/burger1.png',
        description: 'lorem amet '
      },
      {
        id: 4,
        name: 'burger',
        price: 1500,
        imgUrl: 'assets/images/burger1.png',
        description: 'lorem amet '
      },
      {
        id: 5,
        name: 'burger',
        price: 1500,
        imgUrl: 'assets/images/burger1.png',
        description: 'lorem amet '
      },
      {
        id: 6,
        name: 'burger',
        price: 1500,
        imgUrl: 'assets/images/burger1.png',
        description: 'lorem amet '
      },
      {
        id: 7,
        name: 'burger',
        price: 1500,
        imgUrl: 'assets/images/burger1.png',
        description: 'lorem amet '
      },
      {
        id: 8,
        name: 'burger',
        price: 1500,
        imgUrl: 'assets/images/burger1.png',
        description: 'lorem amet '
      },
      {
        id: 9,
        name: 'burger',
        price: 1500,
        imgUrl: 'assets/images/burger1.png',
        description: 'lorem amet '
      },
     
    ]
  }
  getFoodById(id: number){
    return this.getFood().find(Food => Food.id == id);
  }
  constructor() { }
}

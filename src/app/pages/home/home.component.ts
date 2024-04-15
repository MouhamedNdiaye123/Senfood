import { Component } from '@angular/core';
import { OrderComponent } from '../../Components/order/order.component';
import { PointsFortsComponent } from '../../Components/points-forts/points-forts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OrderComponent,PointsFortsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

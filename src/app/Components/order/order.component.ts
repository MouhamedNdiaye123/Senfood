import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  orders: Array<any> =[
    {
      orderSpan: '1',
      orderP: 'selectionner le produit'
    },
    {
      orderSpan: '2',
      orderP: 'remplisser les details'
    }, 
    {
      orderSpan: '3',
      orderP: 'votre commande est livre dans quelques minutes',
    }
  ];
}

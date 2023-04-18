import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
// Interfaccia necessaria per eseguire la direttiva ngIf nel Template. Nello specifico il richiamo data.proprietà

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  //Decoratore necessario per eseguire un passaggio di dati tra Parent-Child componenti.

  @Output() notify = new EventEmitter();
  //Decoratore che permette l'emissione di un evento grazie all'instanza della classe EventEmitter.
  // notify è il nome dell'Output a cui assegnamo l'istanza della classe EventEmitter insieme a tutti i metodi
}

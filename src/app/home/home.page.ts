import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowUpOutline, arrowDownOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter, IonIcon],
})
export class HomePage {
  public numero: number = 0;

  // Constantes
  // readonly: evita que el valor de la variable sea modificado
  public readonly MINIMO: number = 0;
  public readonly MAXIMO: number = 9;

  constructor() {
    addIcons({
      arrowUpOutline,
      arrowDownOutline
    });
  }

  conunterUp() {
    if (this.numero < this.MAXIMO) {
      // console.log('Up');
      this.numero++;
    }
  }

  conunterDown() {
    if (this.numero > this.MINIMO) {
      // console.log('Down');
      this.numero--;
    }
  }
}

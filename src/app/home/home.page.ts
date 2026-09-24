import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter, IonIcon } from '@ionic/angular';
import {addIcons} from 'ionicons';
import {arrowUpOutline,arrowDownOutline} from 'ionicons/icons';
import {Preferences} from '@capacitor/preferences';

//forzar la detección de cambios en la vista
import { ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter, IonIcon],
})
export class HomePage {
  public numero: number = 0;
  //costantes
//readonly: evita que el valor de la variable sea modificado

  public readonly MINIMO: number = 0;
public readonly MAXIMO: number = 9;
private readonly KEY_NUMBER: string = 'ddr_key-number';

  constructor(private cdr: ChangeDetectorRef) {
    addIcons({
      arrowUpOutline,arrowDownOutline
    })
  }
saveNumber() {
  Preferences.set({
    key: this.KEY_NUMBER,
    value: this.numero.toString()
  });
}

async ionViewWillEnter(){
  console.log('ionViewWillEnter');
  const conterPreference = await Preferences.get({key: this.KEY_NUMBER});
  if(conterPreference.value){
    const numero = +conterPreference.value
   if (isNaN(numero) || numero < this.MINIMO || numero > this.MAXIMO) {
    this.numero = this.MINIMO;
    this.saveNumber();
   } else {
    this.numero = numero;
    this.cdr.detectChanges();
   }
  }

}
  conunterUp() {
    if(this.numero < this.MAXIMO){
    //console.log('Up');
    this.numero++
    this.saveNumber();
  }
  }
  conunterDown() {

    if(this.numero > this.MINIMO){
    //console.log('Down');
    this.numero--
    this.saveNumber();
  }
}
}
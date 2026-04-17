import { Component } from '@angular/core';
import { IonAlert, IonButton } from '@ionic/angular';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})

export class Tab1Page {

  constructor(private alertService: AlertService) {}

  lanzarAlerta() {
    this.alertService.presentAlert(
      'Alerta',
      'Mensaje desde un servicio personalizado de alerta. Integrantes: Emily Galeas, Joel Torres'
    );
  }

}

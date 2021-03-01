import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-scanner',
  templateUrl: 'product-scanner.page.html',
  styleUrls: ['product-scanner.page.scss'],
})
export class ProductScannerPage {

  constructor(public alertController: AlertController) {}

  async showAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
}

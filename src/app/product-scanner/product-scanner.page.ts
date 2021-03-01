
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Haptics, Toast } = Plugins;

@Component({
  selector: 'app-product-scanner',
  templateUrl: 'product-scanner.page.html',
  styleUrls: ['product-scanner.page.scss'],
})
export class ProductScannerPage {

  barcodes: Array<string> = ['7613269300748', '7617400030716', '4104420034167', '7613269018421', '87157420'];
  randomBarcode: string;

  constructor(private router: Router, private barcodeScanner: BarcodeScanner) {}

  ionViewWillEnter() {
    this.randomBarcode = this.barcodes[Math.floor(Math.random() * this.barcodes.length)];
  }

  scanBarcode() {
    this.barcodeScanner.scan({ formats: 'EAN_8,EAN_13', resultDisplayDuration: 0 }).then(async result => {
      if (!result.cancelled) {
        const barcode = result.text;

        Haptics.vibrate();
        await Toast.show({ text: `Produkt gefunden: ${barcode}`, duration: 'long' });
        this.router.navigateByUrl(`product-detail/${barcode}`);
      }
    }).catch(_ => this.router.navigateByUrl(`product-detail/${this.randomBarcode}`));
  }
}

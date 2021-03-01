
import { BarcodeScanner  } from '@ionic-native/barcode-scanner/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { Product } from 'android/app/src/main/assets/public/app/openfood-api/model/models';

const { Haptics, Toast } = Plugins;

@Component({
  selector: 'app-product-scanner',
  templateUrl: 'product-scanner.page.html',
  styleUrls: ['product-scanner.page.scss'],
})
export class ProductScannerPage {

  recentProducts: Array<any>;
  private barcodes: Array<string> = ['7613269300748', '7617400030716', '4104420034167', '7613269018421', '87157420'];

  constructor(
    private router: Router,
    private barcodeScanner: BarcodeScanner,
    private nativeStorage: NativeStorage) {}

  ionViewWillEnter() {
    this.recentProducts = Array<any>();

    this.nativeStorage.keys().then(
      keys => {
        for (const key of keys) {
          this.nativeStorage.getItem(key).then(value => this.recentProducts.push(value));
        }
      }, _ => {}
    );

  }

  scanBarcode() {
    this.barcodeScanner.scan({ formats: 'EAN_8,EAN_13', resultDisplayDuration: 0 }).then(async result => {
      if (!result.cancelled) {
        const barcode = result.text;

        Haptics.vibrate();
        await Toast.show({ text: `Product found: ${barcode}`, duration: 'long' });
        this.router.navigate(['/product-detail', barcode]);
      }
    }).catch(_ => this.router.navigate(['/product-detail', this.barcodes[Math.floor(Math.random() * this.barcodes.length)]]));
  }

  openProduct(barcode: number) {
    this.router.navigate(['/product-detail', barcode]);
  }

  deleteProduct(barcode: number) {
    this.nativeStorage.remove(barcode.toString());
    this.recentProducts = this.recentProducts.filter(item => item.code !== barcode);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-product-scanner',
  templateUrl: 'product-scanner.page.html',
  styleUrls: ['product-scanner.page.scss'],
})
export class ProductScannerPage {

  barcodes: Array<string> = ['7613269300748', '7617400030716', '4104420034167', '7613269018421', '87157420'];
  randomBarcode: string;

  constructor() {}

  ionViewWillEnter() {
    this.randomBarcode = this.barcodes[Math.floor(Math.random() * this.barcodes.length)];
  }
}

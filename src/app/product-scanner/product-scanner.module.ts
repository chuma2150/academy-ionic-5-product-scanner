import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { ProductScannerPage } from './product-scanner.page';
import { ProductScannerPageRoutingModule } from './product-scanner-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductScannerPageRoutingModule
  ],
  declarations: [ProductScannerPage],
  providers: [BarcodeScanner]
})
export class ProductScannerPageModule {}

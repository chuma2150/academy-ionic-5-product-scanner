import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProductScannerPage } from './product-scanner.page';

import { ProductScannerPageRoutingModule } from './product-scanner-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductScannerPageRoutingModule
  ],
  declarations: [ProductScannerPage]
})
export class ProductScannerPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { ProductDetailPageRoutingModule } from './product-detail-routing.module';

import { ProductDetailPage } from './product-detail.page';
import { OpenFoodModule } from '../openfood-api/openfood.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailPageRoutingModule,
    OpenFoodModule,
  ],
  declarations: [ProductDetailPage],
  providers: [NativeStorage]
})
export class ProductDetailPageModule {}

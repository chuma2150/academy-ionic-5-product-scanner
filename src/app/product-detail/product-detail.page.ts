import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoadingController, ToastController } from '@ionic/angular';
import { Image, Product, ProductResponse } from '../openfood-api/model/models';
import { OpenFoodService } from '../openfood-api/openfood.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  product: Product;
  imageUrls: Array<string> = [];
  private loadingElement: HTMLIonLoadingElement;

  constructor(
    private activatedRoute: ActivatedRoute,
    private openFoodApi: OpenFoodService,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private location: Location) { }

  async ngOnInit() {
    await this.presentLoading();

    this.activatedRoute.paramMap.subscribe(params => {
      this.loadProductInfo(params.get('randomBarcode'));
    });
  }

  loadProductInfo(barcode: string) {
    const productInfoObservable = this.openFoodApi.listProducts([], [barcode]);

    productInfoObservable.subscribe(async (response: ProductResponse) => {
      await this.closeLoading();

      if (response.data.length > 0) {
        this.product = response.data[0];
        this.imageUrls = this.product.images.map((image: Image) => image.large);
      } else {
        await this.showLoadingError();
      }
    }, async (error: Error) => {
      await this.showLoadingError(error);
      await this.closeLoading();
    });
  }

  async showLoadingError(error?: Error) {
    const toast = await this.toastController.create({
      message: `Product could not been ${error ? `loaded\n${error?.message}` : 'found' }`,
      duration: 4000
    });

    await toast.present();
    this.location.back();
  }

  async presentLoading() {
    this.loadingElement = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading Product...',
    });

    await this.loadingElement.present();
  }

  async closeLoading() {
    await this.loadingElement?.dismiss();
  }
}

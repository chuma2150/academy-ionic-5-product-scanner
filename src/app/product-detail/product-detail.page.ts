import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Product, ProductResponse } from '../openfood-api/model/models';
import { OpenFoodService } from '../openfood-api/openfood.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  product: Product;
  isLoading: boolean;
  loadingElement: HTMLIonLoadingElement;

  constructor(
    private activatedRoute: ActivatedRoute,
    private openFoodApi: OpenFoodService,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private router: Router) { }

  async ngOnInit() {
    await this.presentLoading();

    this.activatedRoute.paramMap.subscribe(params => {
      this.loadProductInfo(params.get('randomBarcode'));
    });
  }

  loadProductInfo(barcode: string) {
    const productInfoObservable = this.openFoodApi.listProducts([], [barcode]);

    productInfoObservable.subscribe(async (response: ProductResponse) => {
      this.product = response.data[0];
      await this.closeLoading();
    }, async (error: Error) => {
      await this.showLoadingError(error);
      await this.closeLoading();
    });
  }

  async showLoadingError(error: Error) {
    const toast = await this.toastController.create({
      message: `Product could not been loaded\n${error?.message}`,
      duration: 4000
    });

    await toast.present();
    this.router.navigateByUrl('/');
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

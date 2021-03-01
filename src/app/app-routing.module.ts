import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product-scanner',
    loadChildren: () => import('./product-scanner/product-scanner.module').then( m => m.ProductScannerPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: '',
    redirectTo: 'product-scanner',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

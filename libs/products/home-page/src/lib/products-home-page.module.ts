import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedProductStateModule } from '@nx-example/shared/product/state';

import { HomePageComponent } from './views/home-page/home-page.component';
import { OtherComponent } from './component/other/other.component';

@NgModule({
  imports: [
    CommonModule,
    SharedProductStateModule,

    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent
      }
    ])
  ],
  declarations: [HomePageComponent, OtherComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsHomePageModule {}

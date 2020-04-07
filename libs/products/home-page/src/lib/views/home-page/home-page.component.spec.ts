import { async } from '@angular/core/testing';

import { ProductsHomePageModule } from '@nx-example/products/home-page';
import { Shallow } from 'shallow-render';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let shallow: Shallow<any>;

  beforeEach(async(() => {
    shallow = new Shallow(HomePageComponent, ProductsHomePageModule)
  }));

  it('should create', () => {
    expect(shallow).toBeTruthy();
  });

});

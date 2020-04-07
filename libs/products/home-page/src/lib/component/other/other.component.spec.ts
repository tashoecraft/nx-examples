import { async } from '@angular/core/testing';
import { ProductsHomePageModule } from '@nx-example/products/home-page';
import { Shallow } from 'shallow-render';

import { OtherComponent } from './other.component';

describe('OtherComponent', () => {
  let shallow: Shallow<any>;
  let rendered;

  beforeEach(async(() => {
    shallow = new Shallow(OtherComponent, ProductsHomePageModule)
  }));

  it('should create', async () => {
    expect(shallow).toBeTruthy();
    rendered = await shallow.render();
    expect(rendered).toBeTruthy();
  });
});

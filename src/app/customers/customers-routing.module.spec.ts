import { Location } from '@angular/common';
import { NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRoutingModule } from '../app-routing.module';
import { AppModule } from '../app.module';
import { CustomersRoutingModule, routes } from './customers-routing.module';

describe('Router: Backbone Bom Module', () => {
  let location: Location;
  let router: Router;
  let ngZone: NgZone;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        AppRoutingModule,
        CustomersRoutingModule,
        RouterTestingModule.withRoutes(routes),
      ],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    ngZone = TestBed.inject(NgZone);
  });

  it('should navigate to view page', async () => {
    await ngZone.run(() => router.navigateByUrl('bom/view'));

    expect(location.path()).toBe('/bom/view');
  });
});

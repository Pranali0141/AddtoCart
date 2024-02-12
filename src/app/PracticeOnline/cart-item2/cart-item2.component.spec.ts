import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItem2Component } from './cart-item2.component';

describe('CartItem2Component', () => {
  let component: CartItem2Component;
  let fixture: ComponentFixture<CartItem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItem2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

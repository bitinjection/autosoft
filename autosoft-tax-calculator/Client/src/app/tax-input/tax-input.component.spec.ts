import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxInputComponent } from './tax-input.component';

describe('TaxInputComponent', () => {
  let component: TaxInputComponent;
  let fixture: ComponentFixture<TaxInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Valid incomes', () => {
    const incomes = [ '12345', '999999999', '1'];

    incomes.forEach(income => {
      it(`${income} is valid`, () => {
        const isValid = component.isOnlyNumeric(income);
        expect(isValid).toBeTrue();
      });
    })
  });

  describe('Invalid incomes', () => {
    const incomes = [ '', '99a999999', '1,000,000'];

    incomes.forEach(income => {
      it(`${income} is invalid`, () => {
        const isValid = component.isOnlyNumeric(income);
        expect(isValid).toBeFalse();
      });
    })
  });

  describe('Valid zipcodes', () => {
    const zipcodes = [ '12345', '55555'];

    zipcodes.forEach(zipcode => {
      it(`${zipcode} is valid`, () => {
        const isValid = component.isZipcodeValid(zipcode);
        expect(isValid).toBeTrue();
      });
    })
  });

  describe('Invalid zipcodes', () => {
    const zipcodes = [ '', '4321', '123456', '123abc', '1234.'];

    zipcodes.forEach(zipcode => {
      it(`${zipcode} is invalid`, () => {
        const isValid = component.isZipcodeValid(zipcode);
        expect(isValid).toBeFalse();
      });
    })
  });

});

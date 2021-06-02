import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TaxPageComponent } from './tax-page.component';

import { getState } from '../zipcode-utility';

describe('TaxPageComponent', () => {
  let component: TaxPageComponent;
  let fixture: ComponentFixture<TaxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxPageComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Test zip codes', () => {
    const zipTable = [
      { zipcode: '77385', state: 'Texas' },
      { zipcode: '10001', state: 'New York' },
      { zipcode: '22038', state: 'Virginia' },
      { zipcode: '90210', state: 'California' }
    ];

    zipTable.forEach(entry => {

      it(`${entry.zipcode} returns ${entry.state}`, () => {
        const state = getState(entry.zipcode);
        expect(state).toBe(entry.state);
      });
    });
  });
});

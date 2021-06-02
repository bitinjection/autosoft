import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TaxCalculatorService } from '../core/services/tax-calculator.service';
import { TaxResultsComponent } from '../tax-results/tax-results.component';
import { getState } from '../zipcode-utility';


@Component({
  selector: 'app-tax-page',
  templateUrl: './tax-page.component.html',
  styleUrls: ['./tax-page.component.css']
})
export class TaxPageComponent implements OnInit {

  public displayResult = false;
  public toggleCalculateButton$ = new Subject<boolean>();

  public income: string = '';
  public state: string = '';
  public isMonthly: boolean = false;

  @ViewChild('taxresults') taxResultsComponent!: TaxResultsComponent;

  constructor(private taxCalculatorService: TaxCalculatorService) { }

  ngOnInit(): void { }

  public activateButton(info : { shouldActivate: boolean, income: string, zipcode: string, isMonthly: boolean }) {
    const state = getState(info.zipcode);
    const shouldActivateCalculate = info.shouldActivate && state !== 'none';

    this.income = info.income;
    this.state = state;
    this.isMonthly = info.isMonthly;

    this.toggleCalculateButton$.next(shouldActivateCalculate);
  }

  public calculateTax() {
    this.taxCalculatorService.calculateTax(this.income, this.state, this.isMonthly)
      .pipe(
        tap(tax => this.taxResultsComponent.tax$.next(tax)),
        tap(() => this.taxResultsComponent.displayResults$.next(true))
      ).subscribe();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tax-results',
  templateUrl: './tax-results.component.html',
  styleUrls: ['./tax-results.component.css']
})
export class TaxResultsComponent implements OnInit {

  public displayResults$ = new Subject<boolean>();
  public tax$ = new Subject<{ tax: number, plan: string }>();
  public tax = '';
  public plan = '';

  constructor() { }

  ngOnInit(): void {
    this.tax$.subscribe(v => {
      this.tax = v.tax.toFixed(2);
      this.plan = v.plan;
    });
    this.displayResults$.next(false);
  }

  public calculateTax() {
    this.displayResults$.next(true);
  }


}

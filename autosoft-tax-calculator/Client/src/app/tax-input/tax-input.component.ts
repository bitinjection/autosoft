import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tax-input',
  templateUrl: './tax-input.component.html',
  styleUrls: ['./tax-input.component.css']
})
export class TaxInputComponent implements OnInit {

  @Output() taxInformation = new EventEmitter<{ shouldActivate: boolean, income: string, zipcode: string, isMonthly: boolean }>();

  public isMonthly = false;
  public zipcode: string = '';
  public income: string = '';

  constructor() { }

  ngOnInit(): void { }

  private emitInputInfo() {
    const shouldActivate = this.isAllInputValid();
    const income = this.income;
    const zipcode = this.zipcode;
    const isMonthly = this.isMonthly;

    this.taxInformation.emit({ shouldActivate, income, zipcode, isMonthly });
  }

  public monthlyToggled(isMonthly: boolean) {
    this.isMonthly = isMonthly;
    this.emitInputInfo();
  }

  public zipcodeChanged(zip: string) {
    this.zipcode = zip;
    this.emitInputInfo();
  }

  public incomeChanged(i: string) {
    this.income = i;
    this.emitInputInfo();
  }

  public isOnlyNumeric(s: string) {
    return /^\d+$/.test(s);
  }

  public isIncomeValid(i: string) {
    return this.isOnlyNumeric(i);
  }

  public isZipcodeValid(zip: string) {
    return zip.length === 5 && this.isOnlyNumeric(zip);
  }

  public isAllInputValid() {
    return this.isZipcodeValid(this.zipcode) && this.isIncomeValid(this.income);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaxCalculatorService {

  constructor(private http: HttpClient) { }

  public calculateTax(income: string, state: string, isMonthly: boolean) {
    const incomeAsNumber = +income;
    const adjustedIncome = isMonthly ? incomeAsNumber * 12 : incomeAsNumber;

    return this.http.get(`${environment.server}taxcalculator/income/${adjustedIncome}/state/${state}/`) as Observable<{ tax: number, plan: string }>
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { country } from '../models/country';
import { GlobalVariablesService } from '../shared/global-variables.service'

const url = "http://localhost:51163/api/Sites";
@Injectable({
  providedIn: 'root'
})
export class CurrencyConvererService {


  private countriesListFromService: string[] = [];
  regions: string[];

  constructor(private http: HttpClient, private globalVariablesService: GlobalVariablesService) { }

  public getData(region) {
    return this.http.get(this.globalVariablesService.EXCHANGE_URL_S +
      this.globalVariablesService.EXCHANGE_KEY +
      this.globalVariablesService.EXCHANGE_URL_E + region)
      .toPromise().then((response: any) => {
        return response;
      });
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  // EXCHANGE_URL:string='https://api.exchangeratesapi.io/v1/latest';
  EXCHANGE_URL_S: string = 'https://v6.exchangerate-api.com/v6/';
  EXCHANGE_URL_E = '/latest/';
  EXCHANGE_KEY: string = 'c495fe07c596f50254cb2e5d';
  history;
  constructor() {
    this.history = [];
  }
}

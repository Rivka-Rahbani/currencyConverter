import { Component, OnInit } from '@angular/core';
import { country } from 'src/app/models/country';
import { CurrencyConvererService } from 'src/app/services/currency-converer.service';
import { ConversionRates } from 'src/app/models/country';
import { GlobalVariablesService } from 'src/app/shared/global-variables.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  conversionRates: ConversionRates;

  countriesList: string[] = [
    "select",
    "hsb",
    "isral"
  ]
  countriesList1: country;
  regions: string[];
  fromRegion: string;
  toRegion: string;
  result: any;
  userSum: any;
  isResult: boolean = false;

  constructor(private currencyConvererService: CurrencyConvererService, private globalVariablesService: GlobalVariablesService) { }

  ngOnInit(): void {
    this.currencyConvererService.getData('USD').then(data => {
      debugger;
      this.regions = Object.keys(data['conversion_rates']);
    });;
  }
  // clearResult(){
  //   this.isResult = false
  // }
  convert() {
    this.currencyConvererService.getData(this.fromRegion).then(data => {
      debugger;
      this.isResult = true
      this.result = (data['conversion_rates'][this.toRegion] * this.userSum).toFixed(2);
      this.globalVariablesService.history.push(this.userSum + ' ' + this.fromRegion + ' = ' + this.result + ' ' + this.toRegion)
    });
  }
}



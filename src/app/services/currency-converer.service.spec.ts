import { TestBed } from '@angular/core/testing';
import { CurrencyConvererService } from './currency-converer.service';

describe('CurrencyConvererService', () => {
  let service: CurrencyConvererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyConvererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

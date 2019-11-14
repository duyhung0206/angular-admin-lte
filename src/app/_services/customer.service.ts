import {Injectable} from '@angular/core';
import {config} from '../../config';
import {HttpService} from './http.service';

@Injectable({providedIn: 'root'})
export class CustomerService {
  constructor(private httpService: HttpService) {
  }

  getAllCustomer(callbackFunc, errCallback) {
    this.httpService.sendGetRequest(config.customer.getAllCustomer, callbackFunc, errCallback);
  }

  getCustomerByType(type, callbackFunc, errCallback) {
    this.httpService.sendGetRequest(`${config.customer.getAllCustomer}?type=${type}`, callbackFunc, errCallback);
  }
}

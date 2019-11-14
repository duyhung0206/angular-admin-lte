import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {config} from '../../config';

@Injectable({providedIn: 'root'})
export class HttpService {
  constructor(private http: HttpClient) {
  }

  sendGetRequest(url, callbackFunc, errCallback) {
    this.http.get(`${config.apiUrl}/${url}`).subscribe((response) => {
      // tslint:disable-next-line:no-unused-expression
      callbackFunc && callbackFunc(response);
    }, (reason) => {
      // tslint:disable-next-line:no-unused-expression
      errCallback && errCallback(reason);
    });
  }

  sendPostRequest(url, params, callbackFunc, errCallback) {
    this.http.post(`${config.apiUrl}/${url}`, params).subscribe((response) => {
      // tslint:disable-next-line:no-unused-expression
      callbackFunc && callbackFunc(response);
    }, (reason) => {
      // tslint:disable-next-line:no-unused-expression
      errCallback && errCallback(reason);
    });
  }
}

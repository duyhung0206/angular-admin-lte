import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../../_services/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  listCustomer = [];
  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getAllCustomer((response) => {
      this.listCustomer = response;
    }, (reason) => {
      console.log(reason);
    });
  }

}

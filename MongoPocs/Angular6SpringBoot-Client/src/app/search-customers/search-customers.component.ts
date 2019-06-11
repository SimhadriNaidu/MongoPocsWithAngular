import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  id: string;
  //customers: Customer[];
  customers: any;

  constructor(private dataService: CustomerService) { }

  ngOnInit() {
    this.id = "";
  }

  searchCustomers() {
    this.dataService.getCustomersById(this.id)
       .subscribe(customers => this.customers = customers);
  }

  onSubmit() {
    this.searchCustomers();
  }
}

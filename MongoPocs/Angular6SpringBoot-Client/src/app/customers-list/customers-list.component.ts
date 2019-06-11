import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Observable<Customer[]>;

  constructor(private router: Router,private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersList().subscribe(data => {
      this.customers = data;})
  }
  // deleteUser(customer: Customer): void {
  //   this.customerService.deleteUser(user.id)
  //     .subscribe( data => {
  //       this.customers = this.customers.filter(u => u !== customer);
  //     })
  // };

  editUser(customer: Customer): void {
    // localStorage.removeItem("editUserId");
    // localStorage.setItem("editUserId", customer.id.toString());
    this.router.navigate(['/edit-customer']);
  };

  
}

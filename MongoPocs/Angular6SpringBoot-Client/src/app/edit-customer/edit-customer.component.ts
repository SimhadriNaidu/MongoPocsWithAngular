import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { CustomerService } from '../customer.service';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  //  customer: Customer
  //  editForm: FormGroup;
   constructor(private router: Router,  private customerService: CustomerService) { }

  ngOnInit() {

    // this.editForm = this.formBuilder.group({
    //   id: [''],
    //   email: ['', Validators.required],
    //   name: ['', Validators.required],
      
    // });
  }

  onSubmit(h:any) {

  }

}






// onSubmit() {
//   this.userService.updateUser(this.editForm.value)
//     .pipe(first())
//     .subscribe(
//       data => {
//         this.router.navigate(['list-user']);
//       },
//       error => {
//         alert(error);
//       });
// }

// }
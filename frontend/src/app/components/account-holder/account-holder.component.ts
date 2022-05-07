import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountHolderService } from 'src/app/services/account-holder.service';

@Component({
  selector: 'app-account-holder',
  templateUrl: './account-holder.component.html',
  styleUrls: ['./account-holder.component.css'],
})
export class AccountHolderComponent implements OnInit {
  cpf: any;
  name: any;
  accountHolders: any;
  form: FormGroup;

  constructor(
    private accountHolderService: AccountHolderService,
    private toastr: ToastrService
  ) {
    this.form = new FormGroup({
      'cpfControl' : new FormControl(null, [Validators.required, Validators.minLength(11)]),
      'nameControl' : new FormControl(null, Validators.required),
    });}

  ngOnInit() {
    this.showAccountHolders();
  }

  showAccountHolders(): void {
    this.accountHolderService.list().subscribe(
      (data) => {
        this.accountHolders = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  save(): void {
    const accountHolder = {
      cpf: this.cpf,
      name: this.name,
    };
    console.log(accountHolder);
    this.accountHolderService.create(accountHolder).subscribe(
      (response) => {
        console.log(response);
        this.showAccountHolders();
        this.showSuccess();
        this.form.reset;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showSuccess() {
    this.toastr.success('Account holder added successfully!');
  }

  get cpfControl(){
    return this.form.get('cpfControl');
  }

  get nameControl(){
    return this.form.get('nameControl');
  }
}

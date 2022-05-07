import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountHolderService } from 'src/app/services/account-holder.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-new',
  templateUrl: './transaction-new.component.html',
  styleUrls: ['./transaction-new.component.css'],
})
export class TransactionNewComponent implements OnInit {
  accountHolders: any;
  accountHolder: any;
  form: FormGroup;

  dateTime: any;
  description: any;
  value: any;
  type: any;

  constructor(
    private transactionService: TransactionService,
    private accountHolderService: AccountHolderService,
    private toastr: ToastrService
  ) {
    this.form = new FormGroup({
      transactionDateControl: new FormControl(null, Validators.required),
      transactionAccountHolderControl: new FormControl(
        null,
        Validators.required
      ),
      transactionDescriptionControl: new FormControl(null, Validators.required),
      transactionTypeControl: new FormControl(null, Validators.required),
      transactionValueControl: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.showAccountHolers();
  }

  showAccountHolers(): void {
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
    console.log(this.accountHolder);
    const movimentacao = {
      value: this.value,
      description: this.description,
      type: this.type,
      idAccount: this.accountHolder.id,
      dateTime: this.dateTime,
    };
    console.log(movimentacao);
    this.transactionService.create(movimentacao).subscribe(
      (response) => {
        console.log(response);
        this.showSuccess();
        this.form.reset;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showSuccess() {
    this.toastr.success('Transaction added successfully!');
  }

  get transactionDateControl() {
    return this.form.get('transactionDateControl');
  }

  get transactionAccountHolderControl() {
    return this.form.get('transactionAccountHolderControl');
  }

  get transactionDescriptionControl() {
    return this.form.get('transactionDescriptionControl');
  }

  get transactionTypeControl() {
    return this.form.get('transactionTypeControl');
  }

  get transactionValueControl() {
    return this.form.get('transactionValueControl');
  }
}

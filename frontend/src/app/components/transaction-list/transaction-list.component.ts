import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountHolderService } from 'src/app/services/account-holder.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
})
export class TransactionListComponent implements OnInit {
  transactions: any;
  accountHolders: any;
  accountHolder: any = {};
  form: FormGroup;

  constructor(
    private transactionService: TransactionService,
    private accountHolderService: AccountHolderService,
    private toastr: ToastrService
  ) {
    this.form = new FormGroup({
      accountHolderControl: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.showAccountHolers();
  }

  showAccountHolers(): void {
    this.accountHolderService.list().subscribe(
      (data) => {
        this.accountHolders = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  listTransactions(): void {
    this.transactionService.findByIdAccount(this.accountHolder.id).subscribe(
      (data) => {
        this.transactions = data;
      },
      (error) => {
        this.showError('Select an accout holder!');
      }
    );
  }

  showError(error: string) {
    this.toastr.error(error);
  }

  get accountHolderControl() {
    return this.form.get('accountHolderControl');
  }
}

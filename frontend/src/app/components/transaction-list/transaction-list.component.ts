import { Component, OnInit } from '@angular/core';
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

  constructor(
    private transactionService: TransactionService,
    private accountHolderService: AccountHolderService
  ) {}

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

  listTransactions(): void {
    this.transactionService.findByIdAccount(this.accountHolder.id).subscribe(
      (data) => {
        this.transactions = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

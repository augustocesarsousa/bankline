import { Component, OnInit } from '@angular/core';
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

  dateTime: any;
  description: any;
  value: any;
  type: any;

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
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

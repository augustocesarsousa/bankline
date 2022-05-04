import { Component, OnInit } from '@angular/core';
import { AccountHolderService } from 'src/app/services/account-holder.service';
import { TransitionService } from 'src/app/services/transition.service';

@Component({
  selector: 'app-transition-new',
  templateUrl: './transition-new.component.html',
  styleUrls: ['./transition-new.component.css'],
})
export class TransitionNewComponent implements OnInit {
  accountHolders: any;
  accountHolder: any;

  dateTime: any;
  description: any;
  value: any;
  type: any;

  constructor(
    private transitionService: TransitionService,
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
    this.transitionService.create(movimentacao).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

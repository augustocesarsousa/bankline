import { Component, OnInit } from '@angular/core';
import { AccountHolderService } from 'src/app/services/account-holder.service';
import { TransitionService } from 'src/app/services/transition.service';

@Component({
  selector: 'app-transition-list',
  templateUrl: './transition-list.component.html',
  styleUrls: ['./transition-list.component.css'],
})
export class TransitionListComponent implements OnInit {
  transitions: any;
  accountHolders: any;
  accountHolder: any = {};

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

  listTransitions(): void {
    this.transitionService.findByIdAccount(this.accountHolder.id).subscribe(
      (data) => {
        this.transitions = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

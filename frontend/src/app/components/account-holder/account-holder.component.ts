import { Component, OnInit } from '@angular/core';
import { AccountHolderService } from 'src/app/services/account-holder.service';

@Component({
  selector: 'app-account-holder',
  templateUrl: './account-holder.component.html',
  styleUrls: ['./account-holder.component.css']
})
export class AccountHolderComponent implements OnInit {
  cpf:any;
  name:any;
  accountHolders:any;

  constructor(
    private accountHolderService: AccountHolderService,
  ) { }

  ngOnInit(): void {
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
      cpf:this.cpf,
      name:this.name
    };
    console.log(accountHolder);
    this.accountHolderService.create(accountHolder)
      .subscribe(
        response => {
          console.log(response);
          this.showAccountHolders();
        },
        error => {
          console.log(error);
        });
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHolderComponent } from './components/account-holder/account-holder.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionNewComponent } from './components/transaction-new/transaction-new.component';

const routes: Routes = [
  { path: '', redirectTo: 'transaction', pathMatch: 'full' },
  { path: 'transaction-new', component: TransactionNewComponent },
  { path: 'transaction', component: TransactionListComponent },
  { path: 'account-holder', component: AccountHolderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

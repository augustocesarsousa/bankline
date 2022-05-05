import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHolderComponent } from './components/account-holder/account-holder.component';
import { TransitionListComponent } from './components/transition-list/transition-list.component';
import { TransitionNewComponent } from './components/transition-new/transition-new.component';

const routes: Routes = [
  { path: 'transition-new', component: TransitionNewComponent },
  { path: 'transition', component: TransitionListComponent },
  { path: 'account-holder', component: AccountHolderComponent },
  { path: '', redirectTo: 'transition', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

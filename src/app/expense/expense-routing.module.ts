import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExpenseComponent} from "./expense.component";

const routes: Routes = [
  {
    path: '',
    component: ExpenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }

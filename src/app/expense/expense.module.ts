import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { ModalExpenseComponent } from './modal-expense/modal-expense.component';
import {ExpenseRoutingModule} from "./expense-routing.module";
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule, MatOptionModule,
  MatSelectModule,
  MatTableModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [ExpenseComponent, ModalExpenseComponent],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [ModalExpenseComponent]
})
export class ExpenseModule { }

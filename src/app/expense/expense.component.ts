import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource} from "@angular/material";
import {ModalExpenseComponent} from "./modal-expense/modal-expense.component";
import {Observable} from "rxjs";
import {TRANSACTIONS} from "../services/catalogs";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  transtions: Array<any> = TRANSACTIONS;

  displayedColumns: string[] = ['name', 'money', 'category', 'actions'];

  expenses: Array<any> = [];

  constructor(public dialog: MatDialog) {}
  openDialog(data: any = {}): void {
    const dialogRef = this.dialog.open(ModalExpenseComponent, {
      data: {...data}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.save(result);
      }
    });
  }

  ngOnInit() {}

  save(data) {
    console.log(data);
    if (data.hasOwnProperty('id')) {
      this.expenses = this.expenses.map((item: any) => {
        if (data.id == item.id) {
            return data;
        };
        return item;
      });
      // this.categoryCollection.update(data.id, data);
    } else {
      data.id = this.expenses.length;
      this.expenses.push(data);
    }
  }

  edit(data) {
    console.log(data);
    this.openDialog(data);
  }

  add() {
    this.openDialog();
  }

}

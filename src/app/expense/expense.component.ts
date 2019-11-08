import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource} from "@angular/material";
import {ModalExpenseComponent} from "./modal-expense/modal-expense.component";
import {Observable} from "rxjs";
import {TRANSACTIONS} from "../services/catalogs";
import {ExpenseCollectionService} from "../services/expense-collection.service";
import {CategoryCollectionService} from "../services/category-collection.service";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  transtions: Array<any> = TRANSACTIONS;

  displayedColumns: string[] = ['name', 'money', 'categoryLabel', 'transaction', 'actions'];

  expenses$: Observable<any>;
  private expensesResult: Array<any> = [];

  categories: any = {};
  sum: number = 0;
  constructor(
    private expenseCollectionService: ExpenseCollectionService,
    public categoryCollectionService: CategoryCollectionService,
    public dialog: MatDialog) {
    this.expenses$ = this.expenseCollectionService.get()
      .pipe(
        switchMap((result: Array<any>) => {
          this.expensesResult = result;
          return this.categoryCollectionService.get();
        }),
        map((categories: Array<any>) => {
          this.sum = 0;
          return this.expensesResult.map((data: any) => {
            const category = categories.filter((cat: any) => {
              return cat.id === data.category;
            })[0];
            const transaction:any = this.getTransaction(category.type) || {};

            console.log(transaction);
            if (transaction.hasOwnProperty('value')) {
              this.sum = this.sum + (data.money * transaction.operation);
            }
            return {
              ...data,
              categoryLabel : category.name,
              transaction: transaction.label
            };
          });
        })
      );

    this.categoryCollectionService.get().subscribe((categories: Array<any>) => {
      this.categories = categories.reduce((res, item) => {
        res[item.id] = item;
        return res;
      }, {});
    });
  }

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
      this.expenseCollectionService.update(data.id, data);
    } else {
      this.expenseCollectionService.add(data);
    }
  }

  edit(data) {
    console.log(data);
    this.openDialog(data);
  }

  add() {
    this.openDialog();
  }


  getTransaction(type: any) {
    return this.transtions.filter((t) => {
      return t.value == type;
    })[0];
  }

}

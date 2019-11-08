import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {TRANSACTIONS} from "../../services/catalogs";
import {CategoryCollectionService} from "../../services/category-collection.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-modal-expense',
  templateUrl: './modal-expense.component.html',
  styleUrls: ['./modal-expense.component.scss']
})
export class ModalExpenseComponent implements OnInit {

  categories$: Observable<any>;
  constructor(
    public categoryCollectionService: CategoryCollectionService,
    public dialogRef: MatDialogRef<ModalExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.categories$ = this.categoryCollectionService.get();
  }

  save(): void {
    this.dialogRef.close(this.data);
  }

  ngOnInit() {
  }

}

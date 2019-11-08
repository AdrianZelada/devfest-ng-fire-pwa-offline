import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource} from "@angular/material";
import {ModalCategoryComponent} from "./modal-category/modal-category.component";
import {Observable} from "rxjs";
import {TRANSACTIONS} from "../services/catalogs";
import {CategoryCollectionService} from "../services/category-collection.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  transtions: Array<any> = TRANSACTIONS;

  displayedColumns: string[] = ['name', 'type', 'actions'];

  categories$: Observable<any>;

  constructor(private categoryCollection: CategoryCollectionService, public dialog: MatDialog) {
    this.categories$ = this.categoryCollection.get().pipe(
      map((res: Array<any>) => {
        return res.map((data) => {
          this.transtions.forEach((t: any) => {
            if (data.type == t.value) {
              data.typeLabel = t.label;
            }
          });
          return data;
        });
    }));
  }
  openDialog(data: any = {}): void {
    const dialogRef = this.dialog.open(ModalCategoryComponent, {
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
    if (data.id) {
      this.categoryCollection.update(data.id, data);
    } else {
      this.categoryCollection.add(data);
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

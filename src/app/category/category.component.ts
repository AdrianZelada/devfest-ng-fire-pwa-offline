import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {ModalCategoryComponent} from "./modal-category/modal-category.component";
import {TRANSACTIONS} from "./catalogs";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  transtions: Array<any> = TRANSACTIONS;

  displayedColumns: string[] = ['name', 'type', 'actions'];

  categories: Array<any> = [];

  constructor(public dialog: MatDialog) {
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
    data.typeLabel = this.getType(data.type);
    if (data.hasOwnProperty('id')) {
      this.categories = this.categories.map((item: any) => {
        if (item.id == data.id) {
          return data;
        }
        return item;
      });
    } else {
      data.id = this.categories.length;
      this.categories.push(data);
    }
  }

  edit(data) {
    console.log(data);
    this.openDialog(data);
  }

  add() {
    this.openDialog();
  }

  getType(type: number) {
    let label = '';
    this.transtions.forEach((t: any) => {
      if (type == t.value) {
        label = t.label;
      }
    });
    return label;
  }

}

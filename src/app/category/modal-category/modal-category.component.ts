import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {TRANSACTIONS} from "../catalogs";

@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.component.html',
  styleUrls: ['./modal-category.component.scss']
})
export class ModalCategoryComponent implements OnInit {

  // data: any = {};
  transtions: Array<any> = TRANSACTIONS;

  constructor(
    public dialogRef: MatDialogRef<ModalCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  save(): void {
    this.dialogRef.close(this.data);
  }

  ngOnInit() {
  }

}

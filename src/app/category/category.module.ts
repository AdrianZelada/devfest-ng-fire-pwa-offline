import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import {CategoryRoutingModule} from "./category-routing.module";
import { ModalCategoryComponent } from './modal-category/modal-category.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatOptionModule, MatSelectModule,
  MatTableModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [CategoryComponent, ModalCategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ModalCategoryComponent]
})
export class CategoryModule { }

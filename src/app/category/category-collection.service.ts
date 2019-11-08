import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryCollectionService{

  model: string = 'category';
  constructor(public db: AngularFirestore) {
  }
}

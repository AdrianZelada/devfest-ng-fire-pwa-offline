import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {CollectionParent} from './collection-parent';

@Injectable({
  providedIn: 'root'
})
export class ExpenseCollectionService {

  constructor(public db: AngularFirestore) {
  }
}

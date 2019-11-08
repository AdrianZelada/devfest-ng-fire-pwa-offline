import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {CollectionParent} from './collection-parent';

@Injectable({
  providedIn: 'root'
})
export class CategoryCollectionService extends CollectionParent {

  constructor(public db: AngularFirestore) {
    super('category', db);
  }
}

import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseListObservable } from '@angular/fire/database-deprecated';
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})

export class Item {
  body: string;
}
export class UserService {

  uid = observableOf('123');
  isAdmin = observableOf(true);
  userId: string;
  register: FirebaseListObservable<Item[]> = null;
  items: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase) {
      this.afAuth.authState.subscribe(user => {
        if (user) { this.userId = user.uid; }
      });
    }


    getItemList(): FirebaseListObservable<Item[]> {
      if (!this.userId) { return; }
      this.items = this.db.list(`thrift/${this.userId}`);
      return this.items;
    }



    createItem(item: Item) {
      this.items.push(item);
    }


}

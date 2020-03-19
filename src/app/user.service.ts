import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  uid = observableOf('123');
  isAdmin = observableOf(true);
  constructor( private afAuth) { }
}

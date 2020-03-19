import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  mythrift: '';
  mythrift1: '';
  thrifts: Observable<any[]>;
  constructor(
    public db: AngularFireDatabase,
    public afd: AngularFireDatabase) {
    this.thrifts = db.list('thrift').valueChanges();

  }
  ngOnInit() {
  }

  onSubmit() {
    this.db.list('thrift').push({date: this.mythrift, amount: this.mythrift1});
  }

  contribute() {
    alert('you have successfully contributed');
  }


}

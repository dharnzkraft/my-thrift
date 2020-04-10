import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Platform, NavController } from '@ionic/angular';
import { HistoryPage } from './../history/history.page';
import { Router, NavigationExtras } from '@angular/router';
import { FirebaseListObservable } from '@angular/fire/database-deprecated';
import { AngularFireAuth } from '@angular/fire/auth';

declare var firebase;
export class Item {
  body: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
@Injectable()
export class HomepagePage implements OnInit {
  mythrift: '';
  mythrift1: '';
  thrifts: Observable<any[]>;
  date;
  amount;
  createElement;
  passData;
  thriftID: string;
  items;
  userId: string;
  constructor(
    public router: Router,
    public navCtrl: NavController,
    public platform: Platform,
    public db: AngularFireDatabase,
    public afd: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
     this.getDataFromFirebase();
     this.afAuth.authState.subscribe(user => {
       if (user) { this.userId = user.uid; }
     });

  }
  ngOnInit() {
  }

  onSubmit() {
    this.db.list(`thrift/${this.userId}`).push({date: this.mythrift, amount: this.mythrift1});
  }

  contribute() {
    alert('you have successfully contributed');
  }

  getDataFromFirebase() {
    this.afd.list(`thrift/`).valueChanges().subscribe(
      data => {
        console.log(data);
        this.items = data;

      }
    );

  }


}

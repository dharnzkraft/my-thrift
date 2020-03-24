import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Platform, NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
declare var firebase;

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  mythrift: '';
  mythrift1: '';
  thrifts: Observable<any[]>;

  items;
  date;
  amount;
  createElement;
  passData;

  value: any;

  constructor(
    public router: Router,
    public navCtrl: NavController,
    public platform: Platform,
    public db: AngularFireDatabase,
    public afd: AngularFireDatabase
  ) {
    this.getDataFromFirebase();
   }


  ngOnInit() {
  }

  getDataFromFirebase() {

    this.afd.list('/thrift/').valueChanges().subscribe(
      data => {
        console.log(data);
        this.items = data;

      }
    );
  }


}

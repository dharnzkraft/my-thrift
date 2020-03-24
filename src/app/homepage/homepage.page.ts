import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Platform, NavController } from '@ionic/angular';
import { HistoryPage } from './../history/history.page';
import {Router, NavigationExtras } from '@angular/router';
declare var firebase;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  mythrift: '';
  mythrift1: '';
  thrifts: Observable<any[]>;

  items;
  date;
  amount;
  createElement;
  passData;
  userId;
  thriftID: string;

  constructor(
    public router: Router,
    public navCtrl: NavController,
    public platform: Platform,
    public db: AngularFireDatabase,
    public afd: AngularFireDatabase) {

    this.getDataFromFirebase();
  }
  InsertData() {
    const rootRef = this.db.database.ref(`thrift/`);
    const childRef = rootRef.push({ date: this.mythrift, amount: this.mythrift1 });
    // this.navCtrl.push(HistoryPage);
  }

  ngOnInit() {
  }

  onSubmit() {

    this.InsertData();

  }

  contribute() {
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

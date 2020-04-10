import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Platform, NavController, NavParams } from '@ionic/angular';
import { HistoryPage } from './../history/history.page';
import { Router, NavigationExtras } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Profile } from './../profile';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile = {} as Profile;
  items;
  constructor(
    public router: Router,
    public navCtrl: NavController,
    public platform: Platform,
    public db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public afd: AngularFireDatabase
  ) {
    // this.getDataFromFirebase();
  }

  ngOnInit() {
  }

  // getDataFromFirebase() {

  //   this.afd.list('/register/').valueChanges().subscribe(
  //     data => {
  //       console.log(data);
  //       this.items = data;

  //     }
  //   );
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}

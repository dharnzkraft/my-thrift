import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  itemValue = '';
  itemValue1 = '';
  itemValue2 = '';
  itemValue3 = '';
  itemValue4 = '';
  itemValue5 = '';
  items: Observable<any[]>;

  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.items = db.list('register').valueChanges();
   }

  ngOnInit() {
  }



  onSubmit() {
    this.db.list('register').push({firstname: this.itemValue, lastname: this.itemValue1,
       email: this.itemValue2, password: this.itemValue3, phonenumber: this.itemValue5})
       .then(() => this.navCtrl.setRoot('profilePage'));
  }

  welcome() {
    alert('Account created successfully');
  }

  async register() {
    const { itemValue2, itemValue3, itemValue4 } = this;
    if (itemValue3 !== itemValue4) {
      return console.error('password no go');
    }

    try {
    const res = await this.afAuth.auth.createUserWithEmailAndPassword(itemValue2, itemValue3);
    console.log(res);
    } catch (error) {
      console.dir(error);
    }
  }
}

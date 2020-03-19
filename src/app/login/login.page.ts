import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


export interface Iperson {
  username: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {

  person: Iperson;

  constructor(
    public afAuth: AngularFireAuth,
    public alertController: AlertController,
    public router: Router
  ) {
    this.person = {
      password: '',
      username: ''
    };
   }

  ngOnInit() {
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message,
      buttons: ['ok']
    });
    await alert.present();
  }

  async login() {
    const username = this.person.username;
    const password = this.person.password;
    if (username === '' || password === '') {
      this.presentAlert('username or password field empty');
    }
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password);
      console.log(res);
      this.router.navigateByUrl('/homepage');
    } catch (err) {
      console.log(err);
      this.presentAlert(err.message);
    }
  }


}

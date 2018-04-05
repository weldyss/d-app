import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Session } from '../../models/session.model';
import { LocalProvider } from '../../providers/local/local';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  session: Session = new Session();
  alert: String = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public local: LocalProvider
  ) {}

  auth() {
    if (this.session.email == "weldyss@gmail.com" && this.session.password == "secret") {
      this.local.saveData('user', this.session.email);
      this.navCtrl.setRoot(HomePage);
    } else {
      this.presentToast()
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Erro no login',
      duration: 3000
    });
    toast.present();
  }

  ionViewWillEnter() {
    this.local.getData('user').then(
      data => {
        if (data != null) {
          this.navCtrl.setRoot(HomePage);
        }
      }
    );
  }

}

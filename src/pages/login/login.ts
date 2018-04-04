import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  session: any;
  alert: String = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  auth(session) {
    if (session.email == "weldyss@gmail.com" && session.password == "secret") {
      this.navCtrl.setRoot(HomePage);
    } else {
      this.alert = "Erro no login";
    }
  }

}

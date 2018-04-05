import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalProvider } from '../../providers/local/local';
import { CompanyInfoPage } from '../company-info/company-info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: string = ''

  constructor(public navCtrl: NavController, public local: LocalProvider) {
    this.local.getData('user').then(
      data => {
        this.user = data as string;
      }
    )
  }

  goToCompany(company) {
    this.navCtrl.push(CompanyInfoPage);
  }

}

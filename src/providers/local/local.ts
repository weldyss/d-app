import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LocalProvider {

  constructor(public storage: Storage) {
  }

  saveData(key, value) {
    this.storage.set(key, value);
  }

  getData(key) {
    return new Promise(resolve => {
      this.storage.get(key).then(
        data => {
          resolve(data);
        },
        error => {
          resolve(Error);
        }
      )
    })
  }
}

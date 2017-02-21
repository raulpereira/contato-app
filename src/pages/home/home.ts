import { Component } from '@angular/core';

import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public users: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public contatoFdb: AngularFireDatabase) {
    this.users = this.contatoFdb.list('/contato');
  }

  createUser() {
    let alert = this.alertCtrl.create({
      title: "Novo Contato",
      message: "Informe os dados:",
      inputs: [
        {
          name: "name",
          label: "Nome",
          placeholder: "Nome"
        },
        {
          name: "phone",
          label: "Telefone",
          placeholder: "Telefone",
          type: "tel"
        }
      ],
      buttons: [
        {
          text: "Salvar",
          handler: data => {
            this.users.push({
              name: data.name,
              phone: data.phone
            });
          }
        },
        {
          text: "Cancelar",
          role: 'cancel',
          handler: data => {
            console.log('Adição Cancelada!');
          }
        }
      ]
    });
    alert.present();
  }

  updateUser(user: any, slidingItem: ItemSliding) {
    let alert = this.alertCtrl.create({
      title: "Edita Contato",
      message: "Edita os dados de " + user.name,
      inputs: [
        {
          name: "name",
          label: "Nome",
          placeholder: "Nome",
          value: user.name
        },
        {
          name: "phone",
          label: "Telefone",
          placeholder: "Telefone",
          type: "tel",
          value: user.phone
        }
      ],
      buttons: [
        {
          text: "Salvar",
          handler: data => {
            this.users.update(user.$key, {
              name: data.name,
              phone: data.phone
            });
          }
        },
        {
          text: "Cancelar",
          handler: data => {
            console.log('Edição Cancelada!');
          }
        }
      ]
    });
    alert.present();
    slidingItem.close();
  }

  removeUser(user: any) {
    this.users.remove(user);
  }

}

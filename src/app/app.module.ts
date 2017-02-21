import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from "angularfire2";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const firebaseConfig = {
  apiKey: "AIzaSyCiJT1gsdFuqOzWD6CMvLttgW-uylLBJ9U",
  authDomain: "contatoapp-3ce0d.firebaseapp.com",
  databaseURL: "https://contatoapp-3ce0d.firebaseio.com",
  storageBucket: "contatoapp-3ce0d.appspot.com",
  messagingSenderId: "625663990145"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from "angularfire2";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const firebaseConfig = {
  apiKey: "AIzaSyCadRKKiYr88tlNdFwNUfm6LtcO-v7zWHE",
  authDomain: "contato-app-22a6a.firebaseapp.com",
  databaseURL: "https://contato-app-22a6a.firebaseio.com",
  storageBucket: "contato-app-22a6a.appspot.com",
  messagingSenderId: "627556940726"
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

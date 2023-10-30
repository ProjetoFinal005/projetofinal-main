import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string = "";
  email: string = "";
  senha: string = "";

  constructor(public navCntrl: NavController, private auth:Auth) {}

  async login() {
    const user = await signInWithEmailAndPassword(
      this.auth,
      this.email,
      this.senha
    );
    console.log(user);
    this.goinicio();
    return user;
    
  }

  goinicio() {
    this.navCntrl.navigateForward('/usuario/usuario.page.html');
  }
}
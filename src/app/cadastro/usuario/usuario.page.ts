import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  nome: string = "";
  email: string = "";
  senha: string = "";

  constructor(public navCntrl: NavController, private auth: Auth) { }

  ngOnInit() {
  }

  async cad() {
    const user = await createUserWithEmailAndPassword(
      this.auth,
      this.email,
      this.senha
    );
    this.gotoLogin();
    return user;
  }

  gotoLogin() {
    this.navCntrl.navigateBack('/home');
  }
}


import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from '../servicios/usuario.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  password: string = '';
  nacimiento: string = '';
  sexo: string = '';
  direccion: string = '';
  ciudad: string = '';
  localidad: string = '';
  pais: string = '';
  rol: string = '';
  cp: string = '';

  constructor(private _usuarioService: UsuarioService,private toastController: ToastController) {
    const usuario = this._usuarioService.obtenerUsuario();
    if (usuario) {
      this.nombre = usuario.nombre;
      this.apellidos = usuario.apellidos;
      this.email = usuario.email;
      this.password = usuario.password;
      this.nacimiento = usuario.nacimiento;
      this.sexo = usuario.sexo;
      this.direccion = usuario.direccion;
      this.ciudad = usuario.ciudad;
      this.localidad = usuario.localidad;
      this.pais = usuario.pais;
      this.rol = usuario.rol;
      this.cp = usuario.cp;
    }
   }

  ngOnInit() {

    const token = this._usuarioService.getToken()

    if (token) {
      // Decodifica el token
      const decodedToken: any = jwt_decode(token);

      // Ahora puedes acceder a los datos del token, como el email
      const email = decodedToken.email;
  }

}

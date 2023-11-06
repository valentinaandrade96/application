import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {RespuestaGetToken} from '../interfaces/RespuestaGetToken';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn:'root'
})

export class UsuarioService{
    public url: string;
    public tokenAlmacenado:string;
    constructor(private _http:HttpClient, private _router: Router,private storage: Storage,){
            this.url=environment.urlUsuario;
            this.storage.create();
        }

        login(form:any): Observable<any>{
            console.log(this.url);
            console.log(this.url+'login')
            
    
            return this._http.post(this.url+'login',{email: form.email, password:form.password});

        }

        create(form:any): Observable<any>{
            console.log(this.url);
            
            console.log(form.rol)
    
            return this._http.post(this.url+'create',{
            nombre   : form.nombre,
            apellidos   : form.apellidos,
            email    : form.email,
            password : form.password,
            nacimiento   : form.nacimiento,
            sexo   : form.sexo,
            direccion   : form.direccion,
            ciudad   : form.ciudad,
            localidad   : form.localidad,
            pais   : form.pais,
            cp:form.cp,
            rol:form.rol
            /*
            compras:'{}',
            rol:'usuario',
            carrito:'{}',
            favoritos:'{}',
            */
            });

        }



        logout():void {
            localStorage.removeItem("token");
            this._router.navigate['/first']
        }
        
        getToken(){
            return localStorage.getItem('token')
        }

        cargarToken(){
            this.tokenAlmacenado=localStorage.getItem('token') || null;
        }

        setSession(authResult: RespuestaGetToken){
            localStorage.setItem('Token', authResult.token);
        }

        
        async renewToken():Promise<boolean>{
            this.cargarToken();
            if(!this.tokenAlmacenado){
                this.logout();
                console.log('Nos vamos al login');
                this._router.navigate['/first']; 
                return Promise.resolve(false);

            }
        }

}

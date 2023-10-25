import { Component, OnInit } from '@angular/core';
import { Componente } from '../../interfaces/componente';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth-service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public form: FormGroup;

  login:boolean = true;

  passwordIcon = 'eye-off';
  passwordType = 'password';
  public pass: string ;
  public name: string ;
  public user={
    name:"",
    password:""
  }
  public mail:string;
  
  constructor(private navCtrl: NavController,private formBuilder: FormBuilder, 
    
    private router: Router,private auth:AuthService
    ) {
      this.form = new FormGroup({
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        age: new FormControl('',Validators.required),
        pwd: new FormControl('', Validators.required),
        rpwd: new FormControl('', Validators.required)
      })
     }

  ngOnInit() {
  }

  submitInfo(usuario){
    this.navCtrl.navigateForward(['/infinite-scroll'], {
      queryParams: {
        name: usuario.name
      }
  });

  }


passwordOn() {
  this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
}


onLogin(){
  const username = this.form.controls.username.value;
  const pwd = this.form.controls.pwd.value;

  this.auth.onLoginUser(username, pwd).subscribe({
    next: res => {
      console.log(res);
      localStorage.setItem('token', res.token); 
      this.router.navigate(['/infinite-scroll'], {replaceUrl:true}); 
    },
    error: err => {console.error(err);
    }
  })
}
}
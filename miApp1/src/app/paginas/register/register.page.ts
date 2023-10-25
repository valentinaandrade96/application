import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth-service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    
  public form: FormGroup;

  login:boolean = true;

  passwordIcon = 'eye-off';
  passwordType = 'password';

  constructor(private formBuilder: FormBuilder, 
    private navCtrl: NavController,
    private router: Router,
    private auth:AuthService) { 

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
  
 
  public pass: string ;
  public name: string ;
  public user={
    name:"",
    password:""
  }
  passwordOn() {
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
  submitInfo(usuario){
    this.navCtrl.navigateForward(['/infinite-scroll'], {
      queryParams: {
        name: usuario.name
      }
  });

  }
  segmentChanged(event:any){
    const chose = event.detail.value;

    this.login = chose === 'login';
  }

  checkPassword(){
    const pwd = this.form.controls.pwd.value;
    const confirmPwd = this.form.controls.rpwd.value;

    return pwd === confirmPwd ? true : false;
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
  onRegister(){

    if(this.form.valid){
      const username = this.form.controls.username.value;
      const pwd = this.form.controls.pwd.value;
      const email = this.form.controls.email.value;
      const age = this.form.controls.age.value;
  
      this.auth.onRegister(username, pwd, email, age).subscribe({
        next: res => {
          console.log(res);
          this.onLogin();
        },
        error: err => {console.error(err);}
      })

    }else{
      console.error('Faltan valores');
      
    }
    
  }
}

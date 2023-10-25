import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ComponentesModule } from "../../componentes/componentes.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule,
        ComponentesModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class LoginPageModule {}

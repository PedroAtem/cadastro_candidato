import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
		{
			path: 'login',
			component: LoginComponent
		},
		{
			path: 'cadastro',
			component: CadastroComponent
		}
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

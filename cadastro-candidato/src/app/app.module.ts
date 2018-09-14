import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ListagemComponent } from './view/listagem/listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
		{
			path: 'login',
			component: LoginComponent
		},
		{
			path: 'cadastro',
			component: CadastroComponent
		},
    {
      path: 'listagem',
      component: ListagemComponent
    }
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

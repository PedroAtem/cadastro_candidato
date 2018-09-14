import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../../service/candidato.service';
import { LoginService } from '../../service/login.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	username: string = "pedro.phdois@gmail.com";
	password: string = "pedro";

	constructor(
		private candidatoService: CandidatoService,
		private loginService: LoginService,
		private router: Router
	) { }

	ngOnInit() {
		// this.candidatoService.getCandidatos().subscribe(
		// 	data => console.log(data),
		// 	error => console.log(error),
		// 	() => console.log("acesso a webapi get ok...")
		// );

		// this.candidatoService.getCandidato(23).subscribe(
		// 	data => console.log(data),
		// 	error => console.log(error),
		// 	() => console.log("acesso a webapi get ok...")
		// );
	}

	login() {
		this.loginService.login(this.username, this.password).subscribe(
			data => {
				this.candidatoService.setCandidatoLogado(
					"pedro.phdois@gmail.com",
					"pedro",
					data.access_token,
					data.refresh_token,
					data.token_type
				);
				this.router.navigate(['/listagem']);
			},
			error => {
				console.log(error)
			},
			() => console.log("acesso a webapi get ok...")
		);
	}

}

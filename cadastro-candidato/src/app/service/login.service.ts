import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { CandidatoService } from '../service/candidato.service';

@Injectable()
export class LoginService {

	constructor(
		private http: Http,
		private candidatoService: CandidatoService
	) { }

	// pegando todos os candidatos
	login(username, password) {
		// return this.http.get('https://delineaapi.herokuapp.com/candidate').map((res:Response) => res.json());

		let params = new URLSearchParams();
		params.set("client_id", "Rb6yDNb6muY6Wr9iGybl193VzO6BqOuleLGblg14");
		params.set("client_secret", "NjsLaIedGub9LC2xAKHIt7kiN4DiSBLolT74w2PYrOu4PPdRxCNqgZDLS1UlqwSQry2HSmRj21MWcOiKOuLq8UtsD0LBic26SxJAEHqf7AaZ5C6sOSG9WrHf3gOzJkmY");
		params.set("grant_type", "password");
		params.set("username", username);
		params.set("password", password);

		var headers = new Headers();
		// headers.set('Content-Type', 'application/x-www-form-urlencoded');
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.post('https://delineaapi.herokuapp.com/o/token/', 
			params.toString(), {
				headers : headers
			}
		).map(res=> res.json());

	}

	logout() {
		this.candidatoService.setCandidatoLogado("", "", "", "", "");
	}
}
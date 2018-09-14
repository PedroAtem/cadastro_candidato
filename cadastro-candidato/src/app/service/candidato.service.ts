import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CandidatoService {

	static candidatoLogado : Object = {
		access_token : "",
		refresh_token : "",
		token_type : "Bearer"
	}
	getCandidatoLogado() {
		return CandidatoService.candidatoLogado;
	}
	setCandidatoLogado(username, password, access_token, refresh_token, token_type) {
		CandidatoService.candidatoLogado['username'] = username;
		CandidatoService.candidatoLogado['password'] = password;
		CandidatoService.candidatoLogado['access_token'] = access_token;
		CandidatoService.candidatoLogado['refresh_token'] = refresh_token;
		CandidatoService.candidatoLogado['token_type'] = token_type;
	}

	constructor(
		private http: Http
	) { }


	// pegando todos os candidatos
	getCandidatos() {
		return this.http.get('https://delineaapi.herokuapp.com/candidate').map((res:Response) => res.json());
	}

	// pegando o candidato pelo id
	getCandidato(pk) {
		return this.http.get('https://delineaapi.herokuapp.com/candidate/'+pk).map((res:Response) => res.json());
	}

	putCandidato(candidato) {
		let params = {
			"id":candidato.id,
			"password":"pedro",
			"is_superuser":false,
			"full_name":"Pedro Henrique ASilvsasd asd",
			"first_name":"Pedro",
			"last_name":"Henrique",
			"email":"pedro.phdois@gmail.com",
			"is_staff":false,
			"is_active":false,
			"username":"pedroatem",
			"confirm_username":true,
			"is_social":true,
			"phone":"12988223344",
			"publisher":false,
			"name":"Pedro",
			"cpf":"45760346857",
			"rg":"360748119",
			"birth_date":"1996-04-15",
			"lattes":"",
			"about":""
		}

		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put('https://delineaapi.herokuapp.com/candidate/'+candidato.id, 
			JSON.stringify(params), {
				headers : headers
			}
		).map(res=> res.json());
	}
}
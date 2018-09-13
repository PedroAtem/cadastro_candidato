import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
}
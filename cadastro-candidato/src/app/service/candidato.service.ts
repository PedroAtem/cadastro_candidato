import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CandidatoService {

	constructor(
		private http: Http
	) { }

	getCandidatos() {
		return this.http.get('https://delineaapi.herokuapp.com/candidate').map((res:Response) => res.json());
	}

	getCandidato(pk) {
		return this.http.get('https://delineaapi.herokuapp.com/candidate/'+pk).map((res:Response) => res.json());
	}
}
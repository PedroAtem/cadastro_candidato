import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../../service/candidato.service';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

	candidatos: Array<any>;

	constructor(
		private candidatoService: CandidatoService,
		private loginService: LoginService,
	) { }

	ngOnInit() {
		this.candidatoService.getCandidatos().subscribe(
			data => {
				this.candidatos = data;
				console.log(data);
			},
			error => console.log(error),
			() => console.log("acesso a webapi get ok...")
		);
	}

}

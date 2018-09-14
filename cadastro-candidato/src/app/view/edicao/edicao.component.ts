import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatoService } from '../../service/candidato.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {

	candidato: Object = {
		"full_name" : "",
		"cpf" : "",
		"rg" : "",
		"birth_date" : "",
		"phone" : "",
		"username" : "",
		"email" : "",
		"password" : ""
	};

	constructor(
		private route: ActivatedRoute,
		private candidatoService: CandidatoService
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			if (!isNaN(params.id)) {
				this.candidatoService.getCandidato(params.id).subscribe(
					data => {
						this.candidato = data;
						console.log(data);
					},
					error => console.log(error),
					() => console.log("acesso a webapi get ok...")
				);
			}
		});
	}

	salvar() {
		this.candidatoService.putCandidato(this.candidato).subscribe(
			data => {
				console.log(data);
			},
			error => console.log(error),
			() => console.log("acesso a webapi get ok...")
		);
	}

}

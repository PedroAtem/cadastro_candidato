import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../../service/candidato.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(
		private candidatoService: CandidatoService
	) { }

	ngOnInit() {
		this.candidatoService.getCandidatos().subscribe(
			data => console.log(data),
			error => console.log(error),
			() => console.log("acesso a webapi get ok...")
		);

		this.candidatoService.getCandidato(23).subscribe(
			data => console.log(data),
			error => console.log(error),
			() => console.log("acesso a webapi get ok...")
		);
	}

}

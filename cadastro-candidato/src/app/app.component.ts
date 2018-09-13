import { Component } from '@angular/core';
import { CandidatoService } from './service/candidato.service';
import { LoginService } from './service/login.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [
		CandidatoService,
		LoginService
	]
})

export class AppComponent {
	title = 'app';
}

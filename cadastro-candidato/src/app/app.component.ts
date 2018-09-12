import { Component } from '@angular/core';
import { CandidatoService } from './service/candidato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CandidatoService]
})
export class AppComponent {
  title = 'app';
}

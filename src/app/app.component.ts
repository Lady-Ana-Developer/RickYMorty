import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personajes: any[];
  numPersonajes: number;
  numPaginas: number;
  paginaActual: number;

  constructor(private apiService: ApiService) {
    this.paginaActual = 1;
  }

  ngOnInit() {
    this.apiService.getPersonajes()
      .then(response => {
        this.personajes = response['results'];
        this.numPersonajes = response['info']['count'];
        this.numPaginas = response['info']['pages'];
      })
      .catch(error => console.log(error));
  }

  async cambiarPagina(avanzar) {
    if (avanzar) {
      this.paginaActual++;
    } else {
      this.paginaActual--;
    }
    const response = await this.apiService.getPersonajes(this.paginaActual);
    this.personajes = response['results'];
  }

}

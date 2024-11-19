import { Injectable } from '@angular/core';
import axios from 'axios';  
import { Observable, from } from 'rxjs';  
import { Contrato } from '../modelos/Contrato'; 

@Injectable({
  providedIn: 'root',
})
export class ContratoService {
  private apiUrl = 'http://localhost:8082/api/contratos';

  constructor() {}

  getContratos(): Observable<Contrato[]> {
    return from(
      axios.get(this.apiUrl)
        .then((response) => response.data) 
        .catch((error) => {
          throw new Error(error);
        })
    );
  }

  crearContrato(contrato: Contrato): Observable<Contrato> {
    return from(
      axios.post(this.apiUrl, contrato)  
        .then((response) => response.data)
        .catch((error) => {
          throw new Error(error);
        })
    );
  }


}

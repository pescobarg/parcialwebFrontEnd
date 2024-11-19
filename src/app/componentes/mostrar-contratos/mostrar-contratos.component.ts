import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratoService } from '../../servicios/contrato.service'; 
import { Contrato } from '../../modelos/Contrato';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mostrar-contratos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostrar-contratos.component.html',
  styleUrls: ['./mostrar-contratos.component.css']
})
export class MostrarContratosComponent implements OnInit {
  contratos: Contrato[] = []; 

  constructor(private contratoService: ContratoService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerContratos();
  }

  obtenerContratos(): void {
    this.contratoService.getContratos().subscribe(
      (response) => {
        this.contratos = response;
      },
      (error) => {
        console.error('Error al obtener los contratos', error);
      }
    );
  }

  irACrearContrato() {
    this.router.navigate(['/crear-contrato']);
  }
}

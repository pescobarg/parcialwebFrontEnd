import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contrato } from '../../modelos/Contrato'; 
import { ContratoService } from '../../servicios/contrato.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-contratos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-contratos.component.html',
  styleUrls: ['./crear-contratos.component.css']
})
export class CrearContratosComponent {
  contratoForm: FormGroup;

  constructor(private fb: FormBuilder, private contratoService: ContratoService, private router: Router) {
    this.contratoForm = this.fb.group({
      identificador: ['', Validators.required],
      valor: [null, [Validators.required, Validators.min(0)]],
      nombreContratante: ['', Validators.required],
      documentoContratante: ['', Validators.required],
      nombreContratantista: ['', Validators.required],
      documentoContratantista: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
    });
  }

  crearContrato() {
    if (this.contratoForm.valid) {
      const nuevoContrato: Contrato = this.contratoForm.value;
      this.contratoService.crearContrato(nuevoContrato).subscribe(
        (response) => {
          console.log('Contrato creado:', response);
          this.contratoForm.reset();
        },
        (error) => {
          console.error('Error al crear contrato', error);
        }
      );
    }
  }

  irAMostrarContrato(): void {
    this.router.navigate(['/mostrar-contrato']);
  }
  
}

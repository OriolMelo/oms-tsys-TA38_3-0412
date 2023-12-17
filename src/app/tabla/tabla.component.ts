import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Objeto } from '../models/objeto.model';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  @Input() vector: Objeto[] | any;
  @Output() eliminarObjeto = new EventEmitter();
  @Output() seleccionarObjeto = new EventEmitter();

  borrar(i: number): void{
    this.eliminarObjeto.emit(i);
  }

  seleccionar(i: number): void{
    this.seleccionarObjeto.emit(i);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Objeto } from '../models/objeto.model';

@Component({
  selector: 'app-modificador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modificador.component.html',
  styleUrl: './modificador.component.css'
})
export class ModificadorComponent {

  @Input() objeto: Objeto | any;

  @Output() agregarObjeto = new EventEmitter();
  @Output() modificarObjeto = new EventEmitter();

  codigo: number = -1;
  descripcion: string = "";
  precio: number = -1;

  ngOnChanges(){
    this.codigo = this.objeto.codigo;
    this.descripcion = this.objeto.descripcion;
    this.precio = this.objeto.precio;
    let codigoInput: HTMLElement | null  = document.getElementById("codigo");
    let descripcionInput: HTMLElement | null  = document.getElementById("descripcion");
    let precioInput: HTMLElement | null  = document.getElementById("precio");
    if(codigoInput != undefined){
      codigoInput.innerHTML = String(this.codigo);
    }
    if(descripcionInput != undefined){
      descripcionInput.innerHTML = String(this.descripcion);
    }
    if(precioInput != undefined){
      precioInput.innerHTML = String(this.precio);
    }
  }

  agregar(): void{
    if(this.camposCorrectos()){
      this.agregarObjeto.emit(new Objeto(this.codigo, this.descripcion, this.precio));
    }
  }

  modificar(): void{
    if(this.camposCorrectos()){
      this.modificarObjeto.emit(new Objeto(this.codigo, this.descripcion, this.precio));
    }
  }

  private camposCorrectos(): boolean{
    return this.codigo>=0 && this.descripcion!="" && this.precio>0;
  }
}

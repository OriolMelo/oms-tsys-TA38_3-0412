import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';
import { ModificadorComponent } from './modificador/modificador.component';
import { Objeto } from './models/objeto.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TablaComponent, ModificadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vector';
  vector:Objeto[] = [new Objeto(1,"papas",34),new Objeto(2, "manzanas", 23.5)];
  objeto:Objeto | null = null;

  eliminarObjeto(i: number): void{
    this.vector.splice(i, 1);
  }

  seleccionarObjeto(i: number){
    this.objeto = this.vector[i];
    console.log(this.objeto)
  }

  agregarObjeto(objeto: Objeto){
    this.vector.push(objeto);
  }

  modificarObjeto(objeto: Objeto){
    let i: number = 0;
    let found: boolean = false;
    while(i<this.vector.length && !found){
      if(this.vector[i].getCodigo()==objeto.getCodigo()){
        found = true;
        this.vector[i]=objeto;
      }
      i++;
    }
  }

}

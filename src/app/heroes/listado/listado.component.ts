import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

heroeBorrado: string = '';
heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capital Anérica'];


borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() || '';
  console.log(this.heroeBorrado);
}

}

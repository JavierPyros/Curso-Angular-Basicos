import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Dr.Strange']
  heroeBorrado : string = '';
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
  constructor() {
   }

  ngOnInit(): void {
   
  }

}

import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piedrapt',
  templateUrl: './piedrapt.component.html',
  styleUrls: ['./piedrapt.component.css']
})
export class PiedraptComponent implements OnInit {

  item_player:number|null;
  item_computer:number;
  tabla_decision:Array<Array<number>>;
  array_img_computer:Array<string>;
  img_computer:string;
  texto_resultado:string;

  constructor() { 
    this.item_player=null;
    this.item_computer=0;
    this.tabla_decision=[
      [0, -1, 1],
      [1, 0, -1],
      [-1, 1, 0]
    ];
    this.array_img_computer=["piedra", "papel", "tijeras"];
    this.img_computer="";
    this.texto_resultado="";
  }

  ngOnInit(): void {
  }

  selectionPlayer(x:number):number { 
    this.item_player=x;
    console.log("El jugador ha pulsado: "+this.item_player);
    return this.item_player;
  }

  calcularItemComputer():number{
    this.item_computer= Math.floor(Math.random() * 3);
    console.log("La máquina ha elegido: "+this.item_computer);
    return this.item_computer;
  }

  mostrarResultado(){
    if (this.item_player==null) {
      window.alert("Tienes que seleccionar piedra, papel, o tijera");
      return;
    }
    let result = this.tabla_decision[this.item_player][this.item_computer];
    if(result==0){
        this.texto_resultado="Empate";
    }
    else if (result==1){
      this.texto_resultado="¡¡¡Has ganado!!!";
    }
    else{
      this.texto_resultado="Gana la máquina";
    }
  }

limpiarTodo() {
    location.reload();
}

  playNow(){
    console.log("Ha pulsado jugar");
    this.calcularItemComputer();
    this.img_computer= "assets/piedrapt/"+this.array_img_computer[this.item_computer]+".png";
    this.mostrarResultado();
    this.item_player=null;
  }
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  valor1!: number;
  valor2!: number;
  operacao: string = 'soma';
  resultado: string = '';

  calcular() {
    let res: number;
    switch (this.operacao) {
      case 'soma':
        res = this.valor1 + this.valor2;
        break;
      case 'subtracao':
        res = this.valor1 - this.valor2;
        break;
      case 'multiplicacao':
        res = this.valor1 * this.valor2;
        break;
      case 'divisao':
        res = this.valor1 / this.valor2;
        break;
      default:
        res = 0;
    }
    this.resultado = res.toString();
  }

  limpar() {
    this.valor1 = 0;
    this.valor2 = 0;
    this.resultado = '';
    this.operacao = 'soma';
  }
}

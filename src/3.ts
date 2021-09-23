/*2) Escreva a classe ConversaoDeUnidadesDeTempo com métodos estáticos para
conversão
 das unidades de velocidade segundo a lista abaixo, por exemplo
converMinutoParaSegundo. O método deverá receber a quantidade de minutos e
retornar o valor em segundos.
 */
interface IFuncionario {
  nome: string;
  salarioH: number;
  diasT: number;
  totalFaltas: number;
}
class Funcionarios implements IFuncionario {
  constructor(
    private _nome: string,
    private _salarioH: number,
    private _diasT: number,
    private _totalFaltas: number
  ) {}

  get nome() {
    return this._nome;
  }
  get salarioH() {
    return this._salarioH;
  }
  get diasT() {
    return this._diasT;
  }
  get totalFaltas() {
    return this._totalFaltas;
  }
  set nome(nome: string) {
    if (!nome) {
      throw new Error("Nome vazio!");
    }
    this._nome = nome;
  }

  set salarioH(salarioH: number) {
    if (salarioH <= 0) {
      throw new Error("Salário inválido!");
    }
    this._salarioH = salarioH;
  }
  set diasT(diasT: number) {
    this._diasT = diasT;
  }
  set totalFaltas(totalFaltas: number) {
    this._totalFaltas = totalFaltas;
  }
  calcularSalarioBruto(): number {
    let bruto = this.salarioH * this.diasT;
    return bruto;
  }
  calculoPLR(): number {
    if (this.totalFaltas <= 0) {
      let bruto = this.calcularSalarioBruto();
      return bruto;
    } else if (this.totalFaltas == 1) {
      let desc1 = this.calcularSalarioBruto() * 0.94;
      return desc1;
    } else if (this.totalFaltas == 2) {
      let desc2 = this.calcularSalarioBruto() * 0.92;
      return desc2;
    } else if (this.totalFaltas == 3) {
      let desc3 = this.calcularSalarioBruto() * 0.9;
      return desc3;
    } else if (this.totalFaltas == 4) {
      let desc4 = this.calcularSalarioBruto() * 0.88;
      return desc4;
    } else {
      return 0;
    }
  }
  desconto(): number {
    return this.calcularSalarioBruto() * 0.5 - this.calcularSalarioBruto();
  }
  salarioLiquido(): number {
    return this.calcularSalarioBruto() - this.desconto() + this.calculoPLR();
  }
}
const funcionario = new Funcionarios("Jose", 500, 125, 2);
console.log(`O funcionário de nome ${
  funcionario.nome
} tem o salário bruto de ${funcionario
  .calcularSalarioBruto()
  .toFixed()}, teve ${funcionario.totalFaltas} falta(s) e sua PLR foi
de ${funcionario.calculoPLR().toFixed()}
`);
console.log(`O funcionário de nome ${
  funcionario.nome
} tem o salário bruto de ${funcionario
  .calcularSalarioBruto()
  .toFixed()},  o desconto de  ${funcionario.totalFaltas}  e sua PLR foi
de ${funcionario.calculoPLR().toFixed()} e o salário líquido de ${funcionario
  .salarioLiquido()
  .toFixed()}
`);

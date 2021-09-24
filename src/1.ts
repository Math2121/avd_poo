/*1) 1) Crie uma classe com os atributos produto, preço, quantidade), Crie os métodos
getters e setters. Crie validação para não aceitar nome em branco, preco e
quantidade com valor 0 (zero). Considerando quesão oferecidos descontos pelo
número de quantidade comprada, seguindo a tabela abaixo:
a. Até 10 unidades: não tem desconto
b. de 11 a 20 unidades: 10% de desconto
c. de 21 a 50 unidades: 20% de desconto
d. acima de 50 unidades: 25% de desconto
*/
class Produtos {
  constructor(
    private _produto: string,
    private _preco: number,
    private _quantidade: number
  ) {}

  get produto() {
    return this._produto;
  }
  set produto(produto: string) {
    if (produto == "" || produto == undefined) {
      throw new Error("Produto não pode ser vazio");
    }else{
      this._produto = produto;
    }

  }

  get preco() {
    return this._preco;
  }
  set preco(preco: number) {
    if (preco <= 0 ) {
      throw new Error("Preço inválido");
    }else{
      this._preco = preco;
    }
  }

  get quantidade() {
    return this._quantidade;
  }
  set quantidade(quantidade: number) {
    if (quantidade <= 0 ) {
      throw new Error("Quantidade inválida");
    }else{
      this._quantidade = quantidade;
    }
  }
  desconto(): string {
    let desconto = 0;
    if (this.quantidade <= 10) {
      return `não teve o desconto  e o valor pago foi de ${
        this.quantidade * this.preco
      }`;
    } else if (this.quantidade >= 11 && this.quantidade <= 20) {
      desconto = this.quantidade * this.preco * 0.1;
      return ` teve o desconto de ${desconto} e o valor pago foi de  ${
        this.quantidade * this.preco
      }`;
    } else if (this.quantidade >= 21 && this.quantidade <= 50) {
      desconto = this.quantidade * this.preco * 0.2;
      return ` teve o desconto de ${desconto} e o valor pago foi de ${
        this.quantidade * this.preco
      }}`;
    } else {
      desconto = this.quantidade * this.preco * 0.25;
      return ` teve o desconto de ${desconto}  e o valor pago foi de ${
        this.quantidade * this.preco
      }`;
    }
  }
}

try {
  const produtos = new Produtos("Sabão",125.00,35)
  console.log(produtos)
  console.log(` O produto ${produtos.produto} de preço ${produtos.preco}, quantidade comprada
  de ${produtos.quantidade} ${produtos.desconto()}`)
} catch (error) {
  
  console.log(error.message)
}





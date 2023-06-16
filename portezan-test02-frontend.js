class Age {
  constructor(dataNascimento) {
    this.dataNascimento = dataNascimento;
  }

  calcularIdade() {
    const hoje = new Date();
    const dataNascimento = new Date(this.dataNascimento);

    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const diferencaMes = hoje.getMonth() - dataNascimento.getMonth();
    const diferencaDia = hoje.getDate() - dataNascimento.getDate();

    if (diferencaMes < 0 || (diferencaMes === 0 && diferencaDia < 0)) {
      idade--;
    }

    return idade;
  }
}

/*const dataNascimento = '1989-04-09';
const idadeObj = new Age(dataNascimento);
const idadeAtual = idadeObj.calcularIdade();
console.log(idadeAtual);*/

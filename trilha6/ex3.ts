class EnviadorDeEmail {
    enviarEmail(contato: string, mensagem: string): void {
      if (this.validarContato(contato)) {
        console.log(`Enviando email para ${contato}: ${mensagem}`);
      } else {
        console.log(`Contato inválido: ${contato}`);
      }
    }
  
    validarContato(contato: string): boolean {

      return contato;
    }
  }

  
  /* refatorado */


class ValidadorDeContato {
    validar(contato: string): boolean {
      return contato;
    }
  }
  

  class EnviadorDeEmail {
    validadorDeContato: ValidadorDeContato;
  
    constructor(validadorDeContato: ValidadorDeContato) {
      this.validadorDeContato = validadorDeContato;
    }
  
    enviarEmail(contato: string, mensagem: string): void {
      if (this.validadorDeContato.validar(contato)) {
        console.log(`Enviando email para ${contato}: ${mensagem}`);
      } else {
        console.log(`Contato inválido: ${contato}`);
      }
    }
  }
  
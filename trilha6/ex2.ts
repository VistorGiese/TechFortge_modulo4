class GerenciadorDeUsuarios {
    usuarios: string[];
  
    constructor() {
      this.usuarios = [];
    }
  
    criarUsuario(nomeDeUsuario: string): void {
      this.usuarios.push(nomeDeUsuario);
    }
  
    enviarNotificacao(email: string, mensagem: string): void {
      console.log(`Enviando email para ${email}: ${mensagem}`);
    }
  }

  /* refatorado */


class NotificacaoPorEmail {
    enviarEmail(email: string, mensagem: string): void {
      console.log(`Enviando email para ${email}: ${mensagem}`);
    }
  }
  

  class GerenciadorDeUsuarios {
    usuarios: string[];
    notificacaoPorEmail: NotificacaoPorEmail;
  
    constructor(notificacaoPorEmail: NotificacaoPorEmail) {
      this.usuarios = [];
      this.notificacaoPorEmail = notificacaoPorEmail;
    }
  
    criarUsuario(nomeDeUsuario: string): void {
      this.usuarios.push(nomeDeUsuario);
    }
  
    notificarUsuario(email: string, mensagem: string): void {
      this.notificacaoPorEmail.enviarEmail(email, mensagem);
    }
  }
  
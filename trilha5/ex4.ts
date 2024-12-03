abstract class SistemaDeVotacao {
    abstract votarEm(candidato: string): void;
    abstract obterResultados(): object;
  }
  class Eleicao extends SistemaDeVotacao {
    private votos: Record<string, number> = {};
  
    votarEm(candidato: string): void {
      if (this.votos[candidato]) {
        this.votos[candidato]++;
      } else {
        this.votos[candidato] = 1;
      }
    }
  
    obterResultados(): object {
      return this.votos;
    }
  }
  class Pesquisa extends SistemaDeVotacao {
    private votos: Record<string, number> = {};
  
    votarEm(candidato: string): void {
      if (this.votos[candidato]) {
        this.votos[candidato]++;
      } else {
        this.votos[candidato] = 1;
      }
    }
  
    obterResultados(): object {
      const candidatosOrdenados = Object.entries(this.votos)
        .sort((a, b) => b[1] - a[1]) 
        .map(entry => entry[0]);
  
      return candidatosOrdenados;
    }
  }
      
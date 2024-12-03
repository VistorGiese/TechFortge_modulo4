abstract class GerenciadorDeTarefas {
    abstract adicionarTarefa(tarefa: string): void;
    abstract listarTarefas(): string[];
  }

  class Projeto extends GerenciadorDeTarefas {
    private tarefas: Set<string> = new Set();
  
    adicionarTarefa(tarefa: string): void {
      if (!this.tarefas.has(tarefa)) {
        this.tarefas.add(tarefa);
      } else {
        console.log(`A tarefa "${tarefa}" já foi adicionada ao projeto.`);
      }
    }
  
    listarTarefas(): string[] {
      return Array.from(this.tarefas);
    }
  }

  class TarefasDiarias extends GerenciadorDeTarefas {
    private tarefas: Set<string> = new Set();
  
    adicionarTarefa(tarefa: string): void {
      if (!this.tarefas.has(tarefa)) {
        this.tarefas.add(tarefa);
      } else {
        console.log(`A tarefa "${tarefa}" já foi adicionada.`);
      }
    }
  
    listarTarefas(): string[] {
      return Array.from(this.tarefas);
    }
  }
  
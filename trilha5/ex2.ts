abstract class Inventario {
    abstract adicionarItem(item: string, quantidade: number): void;
    abstract removerItem(item: string): void;
    abstract obterInventario(): Record<string, number>;
  }
  class InventarioDeArmazem extends Inventario {
    private inventario: Record<string, number> = {};
  
    adicionarItem(item: string, quantidade: number): void {
      if (this.inventario[item]) {
        this.inventario[item] += quantidade;
      } else {
        this.inventario[item] = quantidade;
      }
    }
  
    removerItem(item: string): void {
      if (this.inventario[item]) {
        delete this.inventario[item];
      } else {
        console.log(`Item "${item}" não encontrado no inventário.`);
      }
    }
  
    obterInventario(): Record<string, number> {
      return this.inventario;
    }
  }
  class InventarioDeLoja extends Inventario {
    private inventario: Record<string, number> = {};
    private quantidadeMaxima: number = 10;
  
    adicionarItem(item: string, quantidade: number): void {
      if (this.inventario[item] && this.inventario[item] + quantidade <= this.quantidadeMaxima) {
        this.inventario[item] += quantidade;
      } else if (!this.inventario[item] && quantidade <= this.quantidadeMaxima) {
        this.inventario[item] = quantidade;
      } else {
        console.log(`Quantidade máxima para o item "${item}" atingida.`);
      }
    }
  
    removerItem(item: string): void {
      if (this.inventario[item]) {
        delete this.inventario[item];
      } else {
        console.log(`Item "${item}" não encontrado no inventário.`);
      }
    }
  
    obterInventario(): Record<string, number> {
      return this.inventario;
    }
  }
      
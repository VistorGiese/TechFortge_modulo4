abstract class GerenciadorDeFavoritos {
    abstract adicionarFavorito(item: string): void;
    abstract obterFavoritos(): string[];
  }
  class GerenciadorDeFavoritosDeFilmes extends GerenciadorDeFavoritos {
    private favoritos: Set<string> = new Set();
  
    adicionarFavorito(item: string): void {
      this.favoritos.add(item);
    }
  
    obterFavoritos(): string[] {
      return Array.from(this.favoritos).sort();
    }
  }
  class GerenciadorDeFavoritosDeLivros extends GerenciadorDeFavoritos {
    private favoritos: string[] = [];
  
    adicionarFavorito(item: string): void {
      this.favoritos.unshift(item); 
    }
  
    obterFavoritos(): string[] {
      return this.favoritos;
    }
  }
      
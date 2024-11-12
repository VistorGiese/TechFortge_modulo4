class agenda{
    compromissos: string[]

    constructor(compromisos:string[]){
        this.compromissos = compromisos
    }

    adicionar(compromisso: string): void {
         this.compromissos.push(compromisso)
    }
}

const minhaagenda = new agenda(['lal']);
minhaagenda.adicionar('lel');
minhaagenda.adicionar('jooj');
console.log(minhaagenda.compromissos);

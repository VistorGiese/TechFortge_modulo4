class veiculo{

    mover(){
        console.log('o veiculo esta se movendo')
    }
}

class carro extends veiculo{
    
    mover(){
        console.log('o carro esta se movendo')
    }
}

class bicicleta extends veiculo{
    
    mover(){
        console.log('o bicicleta esta se movendo')
    }
}

const minhabick = new bicicleta()
minhabick.mover();

const meuCarro = new carro()
meuCarro.mover();

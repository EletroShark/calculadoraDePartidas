



function rankeada(vitoria,derrota){

return vitoria - derrota;
}
let classificacao = rankeada (10,5);
console.log("a classificação é " + classificacao);


switch (true) {

  case (classificacao <=10):

    console.log("O herói tem saldo de " + classificacao +" e está no nivel Ferro");
    break;

    case (classificacao >=11 && classificacao<=20 ):

    console.log("O herói tem saldo de " + classificacao +" e está no nivel Bronze");
    break;
    
    case (classificacao >=21 && classificacao<=50 ):

    console.log("O herói tem saldo de " + classificacao +" e está no nivel Prata");
    break;
    case (classificacao >=51 && classificacao<=80):

    console.log("O herói tem saldo de " + classificacao +" e está no nivel ouro");
    break;
    case (classificacao >=81 && classificacao<=90 ):

    console.log("O herói tem saldo de " + classificacao +" e está no nivel Diamante");
    break;
    case (classificacao >=91 && classificacao<=100 ):

    console.log("O herói tem saldo de " + classificacao +" e está no nivel Lendário");
    break;
    case (classificacao >=101):

    console.log("O herói tem saldo de " + classificacao +" e está no nivel Imortal");
    break;



}
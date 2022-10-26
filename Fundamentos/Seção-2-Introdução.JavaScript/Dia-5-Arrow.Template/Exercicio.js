    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    const pessoa = {
        nome: 'Henri',
        idade: 20
      }
      pessoa2 = {    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
        const pessoa = {
            nome: 'Henri',
            idade: 20
          }
          pessoa2 = {
            nome: 'Luna',
            idade: 19
          } 
         // Altere essa estrutura para corrigir o erro.
          console.log('Nome:', pessoa.nome);
          console.log('Idade:', pessoa.idade);
          --------- 1 -------
    
          const numeroAleatorio = () => Math.random()
          console.log(numeroAleatorio());
          --------- 2 -------
    
          const hello = (nome) => `Olá, ${nome}!`
          let nome = 'Ivan';
          console.log(hello(nome));
    
        nome: 'Luna',
        idade: 19
      } 
     // Altere essa estrutura para corrigir o erro.
      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);
      
      --------- 1 -------

      const numeroAleatorio = () => Math.random()
      console.log(numeroAleatorio());
      
      --------- 2 -------

      const hello = (nome) => `Olá, ${nome}!`
      let nome = 'Ivan';
      console.log(hello(nome));

     ------- 3 -------

     const speedCar = (speed) => {
     const velocidade = (speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`);
     return velocidade;
     }; 
     console.log(speedCar(500)); 
    ----- 4 ---------

    let statusMotor = 'ligado';

    
    const ligarDesliga = () => {
        statusMotor === 'ligado' ? statusMotor = 'desligado' : statusMotor = 'ligado'
        const mensagem = (statusMotor === 'ligado' ? `O motor está ligado` : `O motor está desligado`)
    return mensagem;
    }
    console.log(ligarDesliga());
    console.log(ligarDesliga());
    console.log(ligarDesliga());

    ------- 5 --------

    const area = (raio) => {
    const pi = 3.14;
    let resultado = pi * Math.pow(raio,2);
    return resultado;   
    } 
    console.log(area(3));

    -------- 6 ------

    const palavra = (frase) => {
        let maiorPalavra = ' ';
        frase = frase.split(" ");
        for(let index of frase) {
        if (index.length > maiorPalavra.length) {
            maiorPalavra = index;
        } 
    }
        return maiorPalavra;
    }
console.log(palavra('Antônio foi no banheiro e não sabemos o que aconteceu'));

const avaliador =  maiorPalavra.length 

-------- FIM -------
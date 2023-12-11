const novelas = [
    {
      nomeNovela: 'Laços de Família',
      principaisAtores: ['Vera Fischer', 'Reynaldo Gianecchini', 'Tony Ramos'],
      diretor: 'Jayme Monjardim',
      horario: 'novela das 8',
      musicaAbertura: 'Love by Grace',
      artistaMusicaAbertura: 'Lara Fabian'
    },
    {
      nomeNovela: 'O Clone',
      principaisAtores: ['Giovanna Antonelli', 'Murilo Benício', 'Dalton Vigh'],
      diretor: 'Jayme Monjardim',
      horario: 'novela das 9',
      musicaAbertura: 'O Clone',
      artistaMusicaAbertura: 'Ney Matogrosso'
    },
    {
      nomeNovela: 'Por Amor',
      principaisAtores: ['Regina Duarte', 'Fábio Assunção', 'Vivianne Pasmanter'],
      diretor: 'Ricardo Waddington',
      horario: 'novela das 8',
      musicaAbertura: 'Canta, Canta, Minha Gente',
      artistaMusicaAbertura: 'Martinho da Vila'
    },
    {
      nomeNovela: 'O Beijo do Vampiro',
      principaisAtores: ['Claudia Raia', 'Tarcísio Meira', 'Mariana Ximenes'],
      diretor: 'Jorge Fernando',
      horario: 'novela das 7',
      musicaAbertura: 'Amor I Love You',
      artistaMusicaAbertura: 'Marisa Monte'
    },
    {
      nomeNovela: 'Senhora do Destino',
      principaisAtores: ['Renata Sorrah', 'José Wilker', 'Susana Vieira'],
      diretor: 'Wolf Maya',
      horario: 'novela das 9',
      musicaAbertura: 'Adeus, Mariana',
      artistaMusicaAbertura: 'Gal Costa'
    },
    {
      nomeNovela: 'Mulheres Apaixonadas',
      principaisAtores: ['Christiane Torloni', 'José Mayer', 'Tony Ramos'],
      diretor: 'Denise Saraceni',
      horario: 'novela das 9',
      musicaAbertura: 'Clube da Esquina Nº 2',
      artistaMusicaAbertura: 'Milton Nascimento'
    },
    {
      nomeNovela: 'Esperança',
      principaisAtores: ['Priscila Fantin', 'Reynaldo Gianecchini', 'Raul Cortez'],
      diretor: 'Luiz Fernando Carvalho',
      horario: 'novela das 6',
      musicaAbertura: 'A Primeira Vista',
      artistaMusicaAbertura: 'Daniela Mercury'
    },
    {
      nomeNovela: 'Chocolate com Pimenta',
      principaisAtores: ['Mariana Ximenes', 'Murilo Benício', 'Elizabeth Savalla'],
      diretor: 'Jorge Fernando',
      horario: 'novela das 6',
      musicaAbertura: 'Amor Perfeito',
      artistaMusicaAbertura: 'Roberto Carlos'
    },
    {
      nomeNovela: 'Sabor da Paixão',
      principaisAtores: ['Cláudia Raia', 'Fábio Assunção', 'Mariana Ximenes'],
      diretor: 'Jayme Monjardim',
      horario: 'novela das 7',
      musicaAbertura: 'De Repente Califórnia',
      artistaMusicaAbertura: 'Lulu Santos'
    },
    {
      nomeNovela: 'Desejos de Mulher',
      principaisAtores: ['Regina Duarte', 'José Mayer', 'Glória Pires'],
      diretor: 'Denise Saraceni',
      horario: 'novela das 7',
      musicaAbertura: 'Pétala',
      artistaMusicaAbertura: 'Djavan'
    }
  ];
  
  //Faça uma função que retorne uma lista de atores que aparecem em mais uma novela
  //Faça uma função que retorne uma lista de novelas de um diretor informado pelo usuário
  //Faça uma função que retorne uma lista de novelas de um ator informado pelo usuário
  //Faça uma função que retorne apenas as novelas das 6 e das 7

function atoresComuns(objeto){
    let cont = 0
    while(cont < objeto.length){
        if(i === 0){
            nomeComum = objeto.principaisAtores[i]
            console.log(nomeComum)
        }
        cont++
    }
}
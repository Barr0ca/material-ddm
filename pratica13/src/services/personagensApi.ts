const API_URL = "https://rickandmortyapi.com/api/character";

export type Personagem = { // Tipo de dado do personagem utilizado na tela
  id: number;
  nome: string;
  estado: string;
  especie: string;
  genero: string;
  origem: string;
  localizacao: string;
  imagem: string;
};

export type PersonagemApi = { // Tipo de dado do personagem utilizado na API
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
};

type PersonagensRespostaApi = {
  results: PersonagemApi[];
};

function mapearPersonagem(personagem: PersonagemApi): Personagem { // Função para mapear o personagem da API para o tipo de dado utilizado na tela
  return {
    id: personagem.id,
    nome: personagem.name,
    estado: personagem.status,
    especie: personagem.species,
    genero: personagem.gender,
    origem: personagem.origin.name,
    localizacao: personagem.location.name,
    imagem: personagem.image,
  };
}

export async function listarPersonagens() {
  const resposta = await fetch(API_URL); // Faz a requisição à API com fetch

  if (!resposta.ok) { // Verifica a resposta da API 
    throw new Error(`Error HTTP ${resposta.status}`);
  }

  const dados = (await resposta.json()) as PersonagensRespostaApi;

  return dados.results.map(mapearPersonagem);
}

// Os dados que vem da API são: id, name, status, species, gender, origin, location e image 

// O endpoint utilizado na atividade é: https://rickandmortyapi.com/api/character ele é o endpoint da API que retorna os dados dos personagens da serie Rick and Morty
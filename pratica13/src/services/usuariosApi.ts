const API_URL = "https://rickandmortyapi.com/api/character";

export type Personagem = {
  id: number;
  nome: string;
  estado: string;
  especie: string;
  genero: string;
  origem: string;
  localizacao: string;
  imagem: string;
};

export type PersonagemApi = {
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

function mapearPersonagem(personagem: PersonagemApi): Personagem {
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
  const resposta = await fetch(API_URL);

  if (!resposta.ok) {
    throw new Error(`Error HTTP ${resposta.status}`);
  }

  const dados = (await resposta.json()) as PersonagensRespostaApi;

  return dados.results.map(mapearPersonagem);
}

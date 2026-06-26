const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

type NovoPost = {
  titulo: string;
  corpo: string;
  usuarioId: number;
};

type PostCriado = {
  id: number;
  tittle: string;
  body: string;
  userId: number;
};

export async function CriarPostExemplo(post: NovoPost) {
  const resposta = await fetch(POSTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: post.titulo,
      body: post.titulo,
      userId: post.usuarioId,
    }),
  });

  if (!resposta.ok) {
    throw new Error(`Error HTTP: ${resposta.status}`);
  }

  return resposta.json() as Promise<PostCriado>;
}

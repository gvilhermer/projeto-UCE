const aulas = [
  "Ep. 1: Introdução à Fotografia – Entendendo sua câmera",
  "Ep. 2: Tipos de Câmeras e Lentes – Escolhendo o equipamento ideal",
  "Ep. 3: Composição Fotográfica – Enquadramento e regra dos terços",
  "Ep. 4: Iluminação – Como usar a luz natural e artificial",
  "Ep. 5: Modos da Câmera – Manual, automático e semiautomático",
  "Ep. 6: Fotografia em Ambientes Externos – Dicas para luz do dia",
  "Ep. 7: Fotografia em Ambientes Internos – Controle de iluminação e sombras",
  "Ep. 8: Fotografia de Retrato – Poses, expressão e enquadramento",
  "Ep. 9: Fotografia de Paisagem – Como capturar a natureza com impacto",
  "Ep. 10: Fotografia Noturna – Longa exposição e uso do tripé",
  "Ep. 11: Edição no Lightroom – Ajustes básicos e correção de cores",
  "Ep. 12: Edição no Photoshop – Retoques e manipulação de imagens",
  "Ep. 13: Estilo Fotográfico – Encontrando sua identidade visual",
  "Ep. 14: Portfólio e Redes Sociais – Como divulgar seu trabalho",
  "Ep. 15: Dicas Profissionais – Como transformar a fotografia em carreira"
];

let aulaAtual = 0;
const titulo = document.getElementById("titulo-aula");
const imagem = document.getElementById("imagem-aula");

function atualizarAula() {
  titulo.textContent = aulas[aulaAtual];
  imagem.src = `https://via.placeholder.com/600x300?text=Aula+${aulaAtual + 1}`;
}

function proximaAula() {
  aulaAtual = (aulaAtual + 1) % aulas.length;
  atualizarAula();
}

function anteriorAula() {
  aulaAtual = (aulaAtual - 1 + aulas.length) % aulas.length;
  atualizarAula();
}
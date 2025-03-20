// Nome do herói
let nomeHeroi = "Aya Kamikaze";

// Pontos de Experiência do herói
let experiencia = 2100;

// Variável para armazenar o nível do herói
let nivel;

// Classifica o herói em um nível com base nos pontos de experiência
switch (true) {
  case experiencia <= 1000:
    nivel = "Ferro";
    break;

  case experiencia >= 1000 && experiencia <= 2000:
    nivel = "Bronze";
    break;

  case experiencia >= 2001 && experiencia <= 5000:
    nivel = "Prata";
    break;

  case experiencia >= 5001 && experiencia <= 7000:
    nivel = "Ouro";
    break;

  case experiencia >= 7001 && experiencia <= 8000:
    nivel = "Platina";
    break;

  case experiencia >= 8001 && experiencia <= 9000:
    nivel = "Ascendente";
    break;

  case experiencia >= 9001 && experiencia <= 10000:
    nivel = "Imortal";
    break;

  case experiencia >= 10001:
    nivel = "Radiante";
    break;

  default:
    // Caso nenhum intervalo de experiência seja correspondente, define o nível como "Desconhecido"
    nivel = "Desconhecido";
}

//Exibe no console o nome do herói e o nível correspondente
console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel);

// Nome do herói
const nomeHeroi = "Aya Kamikaze";

// Pontos de experiência do herói
const experiencia = 2100;

// Função para determinar o nível do herói com base na experiência
function determinarNivel(experiencia) {
  if (experiencia <= 1000) {
    return "ferro";
  } else if (experiencia <= 2000) {
    return "bronze";
  } else if (experiencia <= 5000) {
    return "prata";
  } else if (experiencia <= 7000) {
    return "ouro";
  } else if (experiencia <= 8000) {
    return "platina";
  } else if (experiencia <= 9000) {
    return "ascendente";
  } else if (experiencia <= 10000) {
    return "imortal";
  } else {
    return "radiante";
  }
}

//Determina o nível do herói
const nivel = determinarNivel(experiencia);

//Exibe no console o nome do herói e o nível correspondente
console.log(`O herói de nome ${nomeHeroi} está no nível ${nivel}`);
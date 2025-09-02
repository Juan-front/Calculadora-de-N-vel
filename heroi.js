// ---------------------------
// Função para calcular nível
// ---------------------------
function calcularNivel(tabela, valor) {
  const faixa = tabela.find((faixa) => valor <= faixa.max);
  return faixa ? faixa.nivel : "Desconhecido";
}

// ---------------------------
// Tabelas de níveis
// ---------------------------
const tabelaXP = [
  { max: 1000, nivel: "Ferro" },
  { max: 2000, nivel: "Bronze" },
  { max: 5000, nivel: "Prata" },
  { max: 7000, nivel: "Ouro" },
  { max: 8000, nivel: "Platina" },
  { max: 9000, nivel: "Ascendente" },
  { max: 10000, nivel: "Imortal" },
  { max: Infinity, nivel: "Radiante" },
];

const tabelaRank = [
  { max: 10, nivel: "Ferro" },
  { max: 20, nivel: "Bronze" },
  { max: 50, nivel: "Prata" },
  { max: 80, nivel: "Ouro" },
  { max: 90, nivel: "Diamante" },
  { max: 100, nivel: "Lendário" },
  { max: Infinity, nivel: "Imortal" },
];

// ---------------------------
// Dados do Herói
// ---------------------------
const nome = "Arthas";
const xp = 12340;
const vitorias = 95;
const derrotas = 20;

// ---------------------------
// Cálculos
// ---------------------------
const saldo = vitorias - derrotas;
const nivelXP = calcularNivel(tabelaXP, xp);
const nivelRank = calcularNivel(tabelaRank, vitorias);

// ---------------------------
// Resultados
// ---------------------------
console.log('🎮' ,`Herói ${nome}`);
console.log('📊 ',`Nível por XP (${xp}): ${nivelXP}`);
console.log('⚔ ' ,`Partidas ranqueadas: ${vitorias} / ${derrotas}`);
console.log('📈', `Saldo de vitórias: ${saldo}`);
console.log('🏆', `Nível ranqueado: ${nivelRank}`);
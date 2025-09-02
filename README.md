🏆 Calculadora de Nível de Herói + Partidas Rankeadas

Uma calculadora em JavaScript que avalia o nível de um herói baseado em XP e saldo de partidas ranqueadas, ideal para treinar lógica condicional e funções.



📌 Regras do Desafio

🔹 Nível por XP

O herói progride de acordo com a experiência acumulada:

🟫 Ferro → menos de 1000

🟧 Bronze → 1001 – 2000

⚪ Prata → 2001 – 5000

🟨 Ouro → 5001 – 7000

🟦 Platina → 7001 – 8000

🟪 Ascendente → 8001 – 9000

🔴 Imortal → 9001 – 10000

🌟 Radiante → 10001 ou mais


🔹 Nível por Partidas Rankeadas

O herói também pode ser classificado pelo saldo de vitórias (vitórias - derrotas):

🟫 Ferro → 0 – 10 vitórias

🟧 Bronze → 11 – 20 vitórias

⚪ Prata → 21 – 50 vitórias

🟨 Ouro → 51 – 80 vitórias

🔷 Diamante → 81 – 90 vitórias

🟪 Lendário → 91 – 100 vitórias

🔴 Imortal → 101 ou mais



📊 Exemplo de Saída

const heroi = "Arthas";
const xp = 12000;
const saldoVitorias = 75;

console.log(O Herói ${heroi} está no nível 🌟 Radiante pelo XP.);
console.log(Nas partidas ranqueadas, tem saldo de ${saldoVitorias} vitórias e está no nível 🟪 Lendário.);

Saída esperada:

O Herói Arthas está no nível 🌟 Radiante pelo XP.
Nas partidas ranqueadas, tem saldo de 75 vitórias e está no nível 🟪 Lendário.


🛠 Tecnologias Utilizadas

JavaScript (Node.js)

Estruturas condicionais (if / else if / else)

Funções

Variáveis e operadores


✨ Aprendizados

Este projeto mostrou como:

Criar funções para encapsular lógicas diferentes;

Utilizar condicionais para definir classificações;

Trabalhar com variáveis, operadores e mensagens no console;

Organizar o código de forma modular e mais visual para o usuário.

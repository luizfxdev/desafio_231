// Função principal que calcula a sequência Fibonacci para zumbis
function fibonacciZumbis(n) {
  // Casos base
  if (n <= 0) return [];
  if (n === 1) return [0];

  // Inicializa a sequência com os dois primeiros números
  const sequence = [0, 1];

  // Calcula os números subsequentes
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

// Função para formatar a saída como string
function formatOutput(sequence) {
  return sequence.join(', ');
}

// Função para mostrar os passos do cálculo
function showCalculationSteps(n, sequence) {
  let steps = `Cálculo para os primeiros ${n} termos:\n\n`;

  if (n >= 1) {
    steps += `Termo 1: 0 (início)\n`;
  }
  if (n >= 2) {
    steps += `Termo 2: 1 (início)\n`;
  }

  for (let i = 2; i < n; i++) {
    steps += `Termo ${i + 1}: ${sequence[i - 1]} + ${sequence[i - 2]} = ${sequence[i]}\n`;
  }

  return steps;
}

// Event listeners para os botões
document.addEventListener('DOMContentLoaded', function () {
  const calculateBtn = document.getElementById('calculateBtn');
  const backBtn = document.getElementById('backBtn');
  const input = document.getElementById('fibonacciInput');
  const resultOutput = document.getElementById('resultOutput');
  const calculationSteps = document.getElementById('calculationSteps');

  // Botão de calcular
  calculateBtn.addEventListener('click', function () {
    const n = parseInt(input.value);

    if (isNaN(n) || n < 1) {
      resultOutput.textContent = 'Por favor, insira um número válido maior que 0.';
      calculationSteps.textContent = '';
      return;
    }

    const sequence = fibonacciZumbis(n);
    resultOutput.textContent = formatOutput(sequence);
    calculationSteps.textContent = showCalculationSteps(n, sequence);
  });

  // Botão de voltar (limpa os campos)
  backBtn.addEventListener('click', function () {
    input.value = '';
    resultOutput.textContent = '';
    calculationSteps.textContent = '';
  });

  // Permite usar Enter para calcular
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      calculateBtn.click();
    }
  });
});


const filaSP = [];
const filaSG = [];
const filaSE = [];
export const ultimasChamadas = [];

function gerarCodigo(tipo) {
  const now = new Date();
  const YY = String(now.getFullYear()).slice(2);
  const MM = String(now.getMonth() + 1).padStart(2, '0');
  const DD = String(now.getDate()).padStart(2, '0');
  const sequence = Math.floor(Math.random() * 9000) + 1000;
  return `${YY}${MM}${DD}-${tipo}${sequence}`;
}

export function emitirSenha(tipo) {
  const senha = gerarCodigo(tipo);
  if (tipo === 'SP') filaSP.push(senha);
  else if (tipo === 'SG') filaSG.push(senha);
  else if (tipo === 'SE') filaSE.push(senha);
  alert(`Senha emitida: ${senha}`);
}

let ultimaSenhaSP = false;

export function chamarProximaSenha() {
  let senha = null;
  if (!ultimaSenhaSP) {
    senha = filaSP.shift() || filaSE.shift() || filaSG.shift();
    ultimaSenhaSP = true;
  } else {
    senha = filaSE.shift() || filaSG.shift() || filaSP.shift();
    ultimaSenhaSP = false;
  }
  if (senha) {
    ultimasChamadas.unshift(senha);
    if (ultimasChamadas.length > 5) ultimasChamadas.pop();
    alert(`Chamando senha: ${senha}`);
  } else {
    alert('Nenhuma senha disponível.');
  }
}

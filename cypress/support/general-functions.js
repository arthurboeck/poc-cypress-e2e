import { formatCPF, formatCNPJ } from '@brazilian-utils/brazilian-utils';
// GENERIC FUNCTIONS

//Format currency
export function currencyFormat(num) {
  return num
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

//Format CPF/CNPJ - BRAZIL ONLY
export function documentFormat(documento) {
  //Remove tudo o que não é dígito
  documento = documento.replace(/\D/g, '');

  if (documento.length < 14) {
    //CPF
    documento = formatCPF(documento, { pad: true });
  } else {
    //CNPJ
    documento = formatCNPJ(documento, { pad: true });
  }
  return documento;
}

//Get aplication bearer token
export function getTokenId() {
  return localStorage.getItem('access_token');
}

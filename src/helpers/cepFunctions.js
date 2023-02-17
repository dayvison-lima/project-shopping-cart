export const getAddress = async () => {
  // seu código aqui
  const getCep = document.querySelector('.cep-input');
  const cep = getCep.value;
  // const cartAdress = document.querySelector('.cart__address');

  const primeiroCep = `https://cep.awesomeapi.com.br/json/${cep}`;
  const segundoCep = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  const promisses = await Promise.any([fetch(primeiroCep), fetch(segundoCep)]);
  const data = await promisses.json();
  return data;
};

export const searchCep = async () => {
  // seu código aqui
  const cep = document.querySelector('.cep-input').value;
  const cartAdress = document.querySelector('.cart__address');
  const data = await getAddress();
  const { status, address, district, city, state, type } = data;
  const tamanhoCep = 8;
  const errorNum = 400;
  const erroMessage = 'CEP não encontrado';
  if (cep.length !== tamanhoCep) {
    cartAdress.innerHTML = erroMessage;
  } else if (!Object.keys(data).includes('address')) {
    cartAdress.innerHTML = erroMessage;
  } else {
    cartAdress.innerHTML = `${address} - ${district} - ${city} - ${state}`;
  }
  // const cepAdress = `${address} - ${district} - ${city} - ${state}`;
};

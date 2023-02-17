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
  const tamanhoCep = 8;
  if (cep.length !== tamanhoCep) {
    const erroMessage = 'CEP não encontrado';
    cartAdress.innerHTML = erroMessage;
  } else {
    const data = await getAddress();
    const { status, address, district, city, state } = data;
    // const errorNum = 404;
    // if (status === errorNum) {
    //   const erroMessage = 'CEP não encontrado';
    //   cartAdress.innerHTML = erroMessage;
    // }
    // const cepAdress = `${address} - ${district} - ${city} - ${state}`;
    cartAdress.innerHTML = `${address} - ${district} - ${city} - ${state}`;
  }
};

export const getAddress = async (cep) => {
  const primeiroCep = `https://cep.awesomeapi.com.br/json/${cep}`;
  const segundoCep = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  const promisses = await Promise.any([fetch(primeiroCep), fetch(segundoCep)]);
  const data = await promisses.json();
  return data;
};

export const searchCep = async () => {
  const cep = document.querySelector('.cep-input').value;
  const cartAdress = document.querySelector('.cart__address');
  const data = getAddress(cep);
  return Promise.resolve(data).then((data1) => {
    const { address, district, city, state } = data1;
    const tamanhoCep = 8;
    const erroMessage = 'CEP não encontrado';
    if (address && cep.length === tamanhoCep) {
      cartAdress.innerHTML = `${address} - ${district} - ${city} - ${state}`;
    } else if (cep.length !== tamanhoCep || (!Object.keys(data1).includes('address'))) {
      cartAdress.innerHTML = erroMessage;
    }
  });
};

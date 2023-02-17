export const getAddress = async () => {
  // seu código aqui
  const getCep = document.querySelector('.cep-input');
  const cep = getCep.value;
  const cartAdress = document.querySelector('.cart__address');

  try {
    const primeiroCep = `https://cep.awesomeapi.com.br/json/${cep}`;
    const segundoCep = `https://brasilapi.com.br/api/cep/v2/${cep}`;
    const promisses = await Promise.any([fetch(primeiroCep), fetch(segundoCep)]);
    const data = await promisses.json();
    return data;
  } catch (error) {
    cartAdress.innerHTML = 'CEP não encontrado';
  }
};

export const searchCep = async () => {
  // seu código aqui
  const cartAdress = document.querySelector('.cart__address');
  const data = await getAddress();
  const { address, district, city, state, street, neighborhood } = data;
  const cepAdress = `${address}, ${district}, ${city}, ${state}`;
  cartAdress.innerHTML = cepAdress;
  // cartAdress.innerHTML = `${street}, ${neighborhood}, ${city}, ${state}`;
};

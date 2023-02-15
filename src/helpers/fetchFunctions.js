export const fetchProduct = () => {
  // seu código aqui
};

export async function fetchProductsList(query) {
  if (!query) {
    throw new Error('Termo de busca não informado');
  }

  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.results;
}

console.log(fetchProductsList('computador'));
fetchProductsList('computador');

module.exports = { fetchProductsList };

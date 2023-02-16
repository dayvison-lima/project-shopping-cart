export const fetchProduct = async (id) => {
  // seu código aqui
  if (!id) throw new Error('ID não informado');

  const url = `https://api.mercadolibre.com/items/${id}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export async function fetchProductsList(query) {
  if (!query) throw new Error('Termo de busca não informado');

  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.results;
}

// module.exports = { fetchProductsList };

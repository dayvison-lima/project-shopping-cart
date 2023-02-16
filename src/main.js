import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const productsSection = document.querySelector('.products');

const productList = async () => {
  const products = await fetchProductsList('computador');
  products.forEach((product) => {
    const productElement = createProductElement(product);
    productsSection.appendChild(productElement);
  });
};

window.onload = async () => {
  productList();
};

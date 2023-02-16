import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createCustomElement, createProductElement } from './helpers/shopFunctions';
import './style.css';

const loading = createCustomElement('span', 'loading', 'loading...');
document.querySelector('.cep-button').addEventListener('click', searchCep);
const productsSection = document.querySelector('.products');

const funtionLoading = () => productsSection.appendChild(loading);
const removeLoading = () => productsSection.removeChild(loading);

const errorMessage = 'Algum erro ocorreu, recarregue a página e tente novamente';
const errorLoading = createCustomElement('span', 'error', errorMessage);
const showError = () => productsSection.appendChild(errorLoading);

const productList = async () => {
  funtionLoading();
  try {
    const products = await fetchProductsList('computador');
    products.forEach((product) => {
      const productElement = createProductElement(product);
      productsSection.appendChild(productElement);
    });
  } catch (error) {
    showError();
  } finally {
    removeLoading();
  }
};

// const productList = async () => {
//   const products = await fetchProductsList('computador');
//   products.forEach((product) => {
//     const productElement = createProductElement(product);
//     productsSection.appendChild(productElement);
//   });
// };


window.onload = async () => {
  productList();
};

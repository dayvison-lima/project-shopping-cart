import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('testa se a função fetchProduct é do tipo function', async () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561')
  });
  it('Teste se o retorno da função fetchProduct com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto produto que já está importado no arquivo', async () => {
    const computador = await fetchProduct('MLB1405519561');
    expect(computador).toEqual(product);
  });
  it ('Teste se a função fetchProduct lança um erro caso o argumento não seja passado', async () => {
    try{
      await fetchProduct();
    } catch (error) {
      expect(error.message).toBe('ID não informado');
    }
  });
});
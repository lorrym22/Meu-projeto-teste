// Importa as funções dos componentes
import HeaderComponent from './components/Header.js';
import ProductCardComponent from './components/ProductCard.js';

// Ponto de entrada da nossa aplicação
function App() {
  // Onde os componentes serão renderizados no HTML
  const root = document.getElementById('root');
  
  // --- Montando o Header ---
  const header = HeaderComponent('Minha Loja Incrível', 'Os melhores produtos da web');
  root.appendChild(header);
  
  // --- Montando a Lista de Produtos ---
  const productsSection = document.createElement('main');
  productsSection.classList.add('product-list');
  
  // Dados dos produtos (poderiam vir de uma API)
  const productsData = [
    { id: 1, name: 'Laptop Moderno', price: 4500.00, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Mouse Gamer', price: 250.50, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Teclado Mecânico', price: 399.99, imageUrl: 'https://via.placeholder.com/150' }
  ];
  
  // Cria um card para cada produto e adiciona na seção
  productsData.forEach(product => {
    const card = ProductCardComponent(product);
    productsSection.appendChild(card);
  });
  
  root.appendChild(productsSection);
}

// Roda a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', App);
function ProductCardComponent(product) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('product-card');
  
  cardElement.innerHTML = `
    <img src="${product.imageUrl}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p class="price">R$ ${product.price.toFixed(2)}</p>
    <button>Adicionar ao Carrinho</button>
  `;
  
  // Adicionando um evento específico a este componente
  const button = cardElement.querySelector('button');
  button.addEventListener('click', () => {
    alert(`${product.name} foi adicionado ao carrinho!`);
  });
  
  return cardElement;
}

// Exporta a função
export default ProductCardComponent;
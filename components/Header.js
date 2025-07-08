// A função do componente recebe os dados que precisa (props)
function HeaderComponent(title, subtitle) {
  // Cria o elemento principal do cabeçalho
  const headerElement = document.createElement('header');
  headerElement.classList.add('main-header');
  
  // Usa Template Literals para criar o HTML interno de forma mais fácil
  headerElement.innerHTML = `
    <h1>${title}</h1>
    <p>${subtitle}</p>
    <nav>
      <a href="#">Home</a>
      <a href="#">Sobre</a>
      <a href="#">Contato</a>
    </nav>
  `;
  
  // Retorna o elemento DOM pronto para ser usado
  return headerElement;
}

// Exportamos a função para que outros arquivos possam importá-la
export default HeaderComponent;
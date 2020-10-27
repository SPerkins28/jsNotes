const searchTerm1 = document.getElementById('store');
const searchTerm2 = document.getElementById('product');
const searchTerm3 = document.getElementById('quantity');
const searchForm = document.querySelector('form');

const subBtn = document.querySelector('.submit');

searchForm.addEventListener('submit', go);

function go(e) {
  e.preventDefault();
  let bodyDiv = document.getElementById('results')
  while(bodyDiv.firstChild) {
      bodyDiv.removeChild(bodyDiv.firstChild);
  }
  console.log(searchTerm1.value, searchTerm2.value, searchTerm3.value);
  
  let res = document.createElement('p');
  res.textContent = `I went to ${searchTerm1.value} to buy ${searchTerm3.value} ${searchTerm2.value}s`
  bodyDiv.appendChild(res);
}
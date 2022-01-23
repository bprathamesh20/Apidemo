let form = document.querySelector('#form');
let input = document.querySelector('#seachField');
let searchButton = document.querySelector('button');
let showContainer = document.querySelector('.showContainer')

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const searchTerm = input.value;
  const res = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${searchTerm}`);
    const img = document.createElement('img');
    const showName = document.createElement('p');
    img.src = res.data.image.medium;
    showName.innerText = res.data.name;
    showContainer.append(img);
    showContainer.append(showName);
    
    console.log(res.data)
});





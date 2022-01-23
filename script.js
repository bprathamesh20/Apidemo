let form = document.querySelector('#form');
let input = document.querySelector('#seachField');
let searchButton = document.querySelector('button');


form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const searchTerm = input.value;
  const res = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${searchTerm}`);
    const img = document.createElement('img');
    img.src = res.data.image.medium;
    document.body.append(img);
});





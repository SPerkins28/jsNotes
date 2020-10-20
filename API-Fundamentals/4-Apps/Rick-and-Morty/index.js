fetch('https://rickandmortyapi.com/api/character') //? Fetching the url of the api
  .then(response => response.json()) //? Then running the function response in order to pull the response json data
  .then(json => display(json)) //? Then running the json function to display the results

function display(json) {
    console.log(json.results[0].image); //? Prints the image pulled from the json results with [] & DOT notation
    let rick = json.results[0].image //? Initializing our first image variable at index 0 of the json results then diving into the image of index 0 --> Rick
    let morty = json.results[1].image //? Initializing our second image variable at index 1 of the json results then diving into the image of index 1 --> Morty

    document.getElementById('imageOne').src = rick; //? Grabbing our element imageOne by the id in the HTML and placing our image we pulled from the api inside of the source ""
    document.getElementById('imageTwo').src = morty; //? Grabbing our element imageTwo by the id in the HTML and placing our image we pulled from the api inside of the source ""
}
  
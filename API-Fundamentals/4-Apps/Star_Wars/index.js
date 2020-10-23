const request = async () => {
    const response = await fetch('https://swapi.dev/api/people/1/'); //? returning a promise
    const myJson = await response.json(); //? taking the response data and jsonifying it
    console.log(myJson); //? returning the data as json
    return "this should print last" //? the promise returned from the async function request()
}

request().then(console.log) //? .then is taking the promise from the request() function ("this should print last") and console logging it
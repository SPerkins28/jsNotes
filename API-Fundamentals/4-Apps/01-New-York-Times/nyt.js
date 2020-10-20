const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //? Setting base URL for accessing API
const key = 'JWUIyiJkdQtr0RWQse2NlaP8XyPS0lvA'; //? setting Key for the API that was generated for us
let url; //? Only declaring a variable not initializing so it does not change when we add more later on

//! SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//! RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//! RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none'; //? setting the default page look (no navigation buttons)
let pageNumber = 0;
let displayNav = false;

        
searchForm.addEventListener('submit', fetchResults); //? looking for things to happen | once that happens, call a function
nextBtn.addEventListener('click', nextPage); //? calling back the function from previous page when the previous btn is clicked
previousBtn.addEventListener('click', previousPage); //? clicking the next btn will fire the call back funtion of next page

                    
function fetchResults(e) { //? e is shorthand for the event that is happening
    e.preventDefault(); //? this stops the function from refreshing the page
    //! Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //? initializing url inside of the function
    //? could also be written as url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
        if(startDate.value !== '') { //? if there is a start date --> run this
            url += '&begin_date=' + startDate.value; //? includes the start date into the search
        };

        if(endDate.value !== '') { //? if an end date is present --> run this 
            url += '&end_date=' + endDate.value; //? includes end date into the search
        };
    
    fetch(url) //? fetching the url we initialized above 
        .then(function(result) { //? then runs function with parameter of result
            return result.json(); //? returns result as json
        }) .then(function(json) {
            displayResults(json); //? displaying results from the function pulling json results
        });
}

function displayResults(json) {
    while (section.firstChild) { //? while loop that clears out the previous search results when starting a new search
        section.removeChild(section.firstChild); //? setting it so that a new search will remove old serach items without refreshing the page.
    }
    let articles = json.response.docs; //? stepping into our json object a little further

    if(articles.length === 10) { //? setting an if else if the amount of articles is 10
        nav.style.display = 'block'; //? if there are enough results to need navigation --> display in block form
    } else {
        nav.style.display = 'none'; //? display no navigation if there are not enough results to require it
    }
    
    if(articles.length === 0) { //? if there are 0 articles --> show no results
        console.log("No Results");
    } else {                    //? telling us what to do if there are results
        for(let i = 0; i < articles.length; i++) { //? displaying all of the results we get
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div'); //? clears left and right floats in order to display each article below the previous article

            let current = articles[i]; //? takes whatever article is found in order to dive into it further
            console.log("Current:", current);

            link.href = current.web_url; //? setting our link to current (initialized above) diving furthing into current to get web URL
            link.textContent = current.headline.main; //? setting the text of our artile heading inside the display

            para.textContent = 'Keywords: '; //? setting the keywords paragraph inside our article container

            for(let j = 0; j < current.keywords.length; j++) { //? loop to print each keyword individually
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';   
                para.appendChild(span); //? appends each keyword sepparately as a span. Done because we have multiple keywords
            }

            if(current.multimedia.length > 0) { //? checks for any images present | if there are run this function
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url; //? grabs URL where the img can be reached
                img.alt = current.headline.main; //? makes the alt for the image headline
              }

            clearfix.setAttribute('class','clearfix'); //?keeps elements from floating and puts each article below the first

            article.appendChild(heading); //? appeding artilce heading into our article div
            heading.appendChild(link); //? appending heading link into article div
            article.appendChild(img);  //? appends img within our article div
            article.appendChild(para); //? appends paragraph (keywords) inside our article div
            article.appendChild(clearfix); //? appends clearfix class to our article div
            section.appendChild(article); 
        }
    }
};

function nextPage(e) { //? calling back our event listener function once we press the next page btn
    pageNumber++;
    fetchResults(e);
    console.log("Page number:", pageNumber);
}

function previousPage(e) { //? calling back our event listener fucntion once we press the previous page btn
    if(pageNumber > 0) { //? if the page number is 0 this stops us from going to a negative page number
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e); //? calling our fetch results function again based on the new criteria we are searching
    console.log("Page:", pageNumber);
} 
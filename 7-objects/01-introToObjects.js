let demoArray = [1, 2, 3, [4, 5, 6]];
console.log(demoArray[3][1]);


let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};
//? This is all the obj
console.log(netflix);

//? Just the show name
console.log(netflix.name);

//? Specific episode name
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);

//! CHALLENGE
//? Use indexing with dot notation
//* let showName; //? Here assign "The Office"
let showName = netflix.name;
console.log(showName);

//? use dot notation and the .length prop
//* let seasonOneEpCount; //? Here assign 6
let seasonOneEpCount = netflix.season1.seasonInfo.episodeInfo.length;
console.log(seasonOneEpCount);

//? use a for loop to assign to this #
//* let epNames; //? ["<ep here>", "", ...]
let epNames = [];

//? for (ep of netflix.season1.seasonInfo.episodeInfo) {
//?     epNames.push(ep.episodeName);
//? }

//? console.log(epNames);

//? netflix.season1.seasonInfo.episodeInfo.forEach((data) => console.log(data)); //? Prints the object

let epDetails = netflix.season1.seasonInfo.episodeInfo;

epDetails.forEach((data) => epNames.push(data.episodeName))
console.log(epNames);

//? Using an obj constructor
let numString = String(5);

//? Using an obj literal
let numString2 = "5";

let weather = {
    temp: 88,
    isRaining: false,
    
}

//? JSON <-- JavaScript Object Notation
let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//? Returns an Array of the keys of an object
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad.duck));
console.log(Object.keys(spaceJam.toonSquad).toString());

//? Returns an Array of the values of an object
console.log(Object.values(spaceJam.toonSquad));

//? Object object
Object
//? Object constructor
Object()

let hello = "Hello World!"
let greetArray = ['H', 'E', 'l', 'l', 'o']
// console.log("This is from object.keys:", Object.keys(hello));
// console.log("This is from object.values:", Object.values(hello));
console.log("This is from object.keys:", Object.keys(greetArray));
console.log("This is from object.values:", Object.values(greetArray));
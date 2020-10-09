// let student = {
//     name: "Sean",
//     awesome: true,
//     degree: "JavaScript",
//     week: 1
// }
// for (item in student) {
//     console.log(item);
//     console.log(student[item]);
// }

let cats = ['tabby', 'british shorthair', 'burmese']
for (cat in cats) {
    console.log(cat);
    console.log(cats[cat]);
}

//! Challengewrite a for in loop that capitalizes the first letter of a name,
//! and lowercases the rest of the name 

let name = 'sEaN pErKiNs'
let capName;

for (let i in name){
    if (i == 0){
        capName = name[i].toUpperCase();
    } else {
        capName += name[i].toLowerCase();
    }
}

console.log(capName);